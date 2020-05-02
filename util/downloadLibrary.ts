import * as _ from "lodash";
import {
  playlists,
  artists,
  misc,
  playlistTracks,
  PlaylistTrack,
  tracks,
  audioFeatures,
} from "../data/db";
import stringify from "csv-stringify/lib/sync";
import JSZip from "jszip";
import FileSaver from "file-saver";

const originalFetch = typeof window !== "undefined" ? window.fetch : undefined;
function makeFetch(token: string) {
  if (!originalFetch) throw new Error("no fetch found");
  return async (url: string, options: RequestInit = {}): Promise<Response> => {
    options = {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    };
    const resp = await originalFetch(url, options);

    if (resp.status === 401) {
      throw new Error("Unauthenticated");
    }

    if (resp.status === 429) {
      const retryAfter = resp.headers.get("retry-after") || "1";
      console.log("rate limited, retrying in", retryAfter);
      await new Promise(resolve =>
        setTimeout(resolve, parseInt(retryAfter, 10) * 1000),
      );
      return fetch(url, options);
    }
    return resp;
  };
}

async function fetchAllPlaylists(
  fetch: ReturnType<typeof makeFetch>,
): Promise<SpotifyApi.PlaylistObjectSimplified[]> {
  const limit = 50;
  async function fetchPlaylists(
    offset = 0,
  ): Promise<{
    items: SpotifyApi.PlaylistObjectSimplified[];
    total: number;
  }> {
    const resp = await fetch(
      `https://api.spotify.com/v1/me/playlists?limit=${limit}&offset=${offset}`,
    );
    return resp.json() as Promise<
      SpotifyApi.ListOfCurrentUsersPlaylistsResponse
    >;
  }
  const { items: firstPage, total } = await fetchPlaylists();
  const offsets = _.range(limit, total, limit);
  const subsequentPages = await Promise.all(
    offsets.map(offset => fetchPlaylists(offset).then(({ items }) => items)),
  );

  return _.flatten([firstPage, ...subsequentPages]);
}

async function fetchAllTracksOfPlaylist(
  fetch: ReturnType<typeof makeFetch>,
  playlistId: string,
  total: number,
): Promise<SpotifyApi.TrackObjectFull[]> {
  const limit = 100;
  const offsets = _.range(0, total, limit);
  const allPages = await Promise.all(
    offsets.map(offset =>
      fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}&offset=${offset}`,
      )
        .then(resp => resp.json())
        .then((body: SpotifyApi.PlaylistTrackResponse) =>
          body.items.map(pt => pt.track),
        ),
    ),
  );
  return _.flatten(allPages);
}

async function fetchArtists(
  fetch: ReturnType<typeof makeFetch>,
  artistIds: string[],
): Promise<SpotifyApi.ArtistObjectFull[]> {
  const limit = 50;
  const chunks = _.chunk(artistIds, limit);
  const allArtists = await Promise.all(
    chunks.map(chunk =>
      fetch(`https://api.spotify.com/v1/artists?ids=${chunk.join(",")}`)
        .then(resp => resp.json())
        .then((body: SpotifyApi.MultipleArtistsResponse) => body.artists),
    ),
  );
  return _.flatten(allArtists);
}

async function fetchAudioFeatures(
  fetch: ReturnType<typeof makeFetch>,
  trackIds: string[],
): Promise<SpotifyApi.AudioFeaturesObject[]> {
  const limit = 100;
  const chunks = _.chunk(trackIds, limit);
  const allAudioFeatures = await Promise.all(
    chunks.map(chunk =>
      fetch(`https://api.spotify.com/v1/audio-features?ids=${chunk.join(",")}`)
        .then(resp => resp.json())
        .then(
          (body: SpotifyApi.MultipleAudioFeaturesResponse) =>
            body.audio_features,
        ),
    ),
  );
  return _.flatten(allAudioFeatures);
}

export async function downloadLibrary() {
  const token = await misc.get("token");
  const fetch = makeFetch(token);

  const cachedPlaylistTracksP = playlistTracks
    .toArray()
    .then(arr => _.keyBy(arr, "id"));

  // fetch playlists
  const playlistsP = fetchAllPlaylists(fetch);

  const [cachedPlaylistTracks, fetchedPlaylists] = await Promise.all([
    cachedPlaylistTracksP,
    playlistsP,
  ]);

  await playlists.bulkPut(fetchedPlaylists);

  const playlistTracksToFetch = fetchedPlaylists.filter(
    p => p.snapshot_id !== cachedPlaylistTracks[p.id]?.snapshot_id,
  );

  // fetch playlistTracks, which also gives us tracks
  const playlistTracksToPut: PlaylistTrack[] = [];
  const fetchedTracks = _.flatten(
    await Promise.all(
      playlistTracksToFetch.map(p => {
        const tracksP = fetchAllTracksOfPlaylist(fetch, p.id, p.tracks.total);

        // save snapshotId and trackIds to cache
        tracksP.then(tracks =>
          playlistTracksToPut.push({
            id: p.id,
            snapshot_id: p.snapshot_id,
            trackIds: tracks.map(t => t.uri),
          }),
        );

        return tracksP;
      }),
    ),
  );

  await playlistTracks.bulkPut(playlistTracksToPut);
  await tracks.bulkPut(fetchedTracks);
  const allTracks = await tracks.toArray();

  // fetch artists of tracks
  const cachedArtists = _.keyBy(await artists.toArray(), "id");
  const artistsToFetch = _.uniq(
    _.flatten(allTracks.map(t => t.artists.map(a => a.id))),
  )
    .filter(Boolean)
    .filter(id => !cachedArtists[id]);

  const fetchedArtists = await fetchArtists(fetch, artistsToFetch);
  await artists.bulkPut(fetchedArtists);

  // fetch artists of tracks
  const cachedAudioFeatures = _.keyBy(await audioFeatures.toArray(), "id");
  const audioFeaturesToFetch = _.uniq(_.flatten(allTracks.map(t => t.id)))
    .filter(Boolean)
    .filter(id => !cachedAudioFeatures[id]);

  const fetchedAudioFeatures = await fetchAudioFeatures(
    fetch,
    audioFeaturesToFetch,
  );
  await audioFeatures.bulkPut(fetchedAudioFeatures);

  const allPlaylistTracks = {
    ...cachedPlaylistTracks,
    ..._.keyBy(playlistTracksToPut, "id"),
  };
  const allArtists = {
    ...cachedArtists,
    ..._.keyBy(fetchedArtists, "id"),
  };
  const allAudioFeatures = {
    ...cachedAudioFeatures,
    ..._.keyBy(fetchedAudioFeatures, "id"),
  };

  const playlistsCsv = stringify(fetchedPlaylists, {
    header: true,
    columns: ["id", "name", "description"],
  });
  const playlistTracksCsv = stringify(
    _.flatten(
      Object.values(allPlaylistTracks).map(pt =>
        pt.trackIds.map(id => ({
          track_id: id.replace("spotify:track:", ""),
          playlist_id: pt.id,
        })),
      ),
    ),
    {
      header: true,
      columns: ["track_id", "playlist_id"],
    },
  );
  const tracksCsv = stringify(allTracks, {
    header: true,
    columns: ["id", "duration_ms", "explicit", "name"],
  });
  const trackArtistsCsv = stringify(
    allTracks.flatMap(t =>
      t.artists.map(a => ({
        track_id: t.id,
        artist_id: a.id,
      })),
    ),
    {
      header: true,
      columns: ["track_id", "artist_id"],
    },
  );
  const artistsCsv = stringify(Object.values(allArtists), {
    header: true,
    columns: ["id", "name"],
  });
  const artistGenresCsv = stringify(
    Object.values(allArtists).flatMap(a =>
      a.genres.map(g => ({
        artist_id: a.id,
        genre: g,
      })),
    ),
    {
      header: true,
      columns: ["artist_id", "genre"],
    },
  );
  const audioFeaturesCsv = stringify(Object.values(allAudioFeatures), {
    header: true,
    columns: [
      "id",
      "acousticness",
      "danceability",
      "duration_ms",
      "energy",
      "instrumentalness",
      "key",
      "liveness",
      "loudness",
      "mode",
      "speechiness",
      "tempo",
      "time_signature",
      "valence",
    ],
  });

  const zip = new JSZip();
  const spotifyData = zip.folder("spotify_data");
  spotifyData.file("playlist.csv", playlistsCsv);
  spotifyData.file("playlist_track.csv", playlistTracksCsv);
  spotifyData.file("track.csv", tracksCsv);
  spotifyData.file("track_artist.csv", trackArtistsCsv);
  spotifyData.file("artist.csv", artistsCsv);
  spotifyData.file("artist_genre.csv", artistGenresCsv);
  spotifyData.file("audio_feature.csv", audioFeaturesCsv);
  const blob = await zip.generateAsync({ type: "blob" });
  FileSaver.saveAs(blob, "spotify_data.zip");
}
