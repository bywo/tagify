import * as _ from "lodash";

type Fetch = (url: string, options?: RequestInit) => Promise<Response>;

export async function createPlaylist(
  fetch: Fetch,
  userId: string,
  playlistName: string,
) {
  const resp = await fetch(
    `https://api.spotify.com/v1/users/${userId}/playlists`,
    {
      method: "POST",
      body: JSON.stringify({
        name: playlistName,
        description: "Created by Tagify.",
      }),
    },
  );
  if (!resp.ok) {
    throw new Error("Couldn't create tag.");
  }

  return resp.json();
}

export async function addToPlaylist(
  fetch: Fetch,
  playlistId: string,
  trackId: string,
) {
  const resp = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    {
      method: "POST",
      body: JSON.stringify({
        uris: [trackId],
      }),
    },
  );

  if (resp.ok) {
    return;
  }

  const errorBody = await resp.json();
  const errorMessage =
    (errorBody && errorBody.error && errorBody.error.message) ||
    "An unexpected error occurred.";
  throw new Error(`Failed to add tag: ${errorMessage}`);
}

export async function removeFromPlaylist(
  fetch: Fetch,
  playlistId: string,
  trackId: string,
) {
  const resp = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    {
      method: "DELETE",
      body: JSON.stringify({
        tracks: [{ uri: trackId }],
      }),
    },
  );

  if (resp.ok) {
    return;
  }
  throw new Error("Failed to remove tag.");
}

export async function fetchPlaylists(fetch: Fetch) {
  const limit = 50;
  async function _fetchPlaylists(
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
  const { items: firstPage, total } = await _fetchPlaylists();
  const offsets = _.range(limit, total, limit);
  const subsequentPages = await Promise.all(
    offsets.map(offset => _fetchPlaylists(offset).then(({ items }) => items)),
  );

  return _.flatten([firstPage, ...subsequentPages]);
}

export async function fetchPlaylistTracks(
  fetch: Fetch,
  playlistId: string,
  total: number,
) {
  const limit = 100;
  const offsets = _.range(0, total, limit);
  const allPages = await Promise.all(
    offsets.map(offset =>
      fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}&offset=${offset}`,
      )
        .then(resp => resp.json())
        .then((body: SpotifyApi.PlaylistTrackResponse) =>
          body.items.filter(pt => pt.track).map(pt => pt.track),
        ),
    ),
  );
  return _.flatten(allPages);
}

export async function addToSavedTracks(fetch: Fetch, trackId: string) {
  if (!/spotify:track:/.test(trackId)) {
    throw new Error("Local tracks be added to Liked Songs");
  }
  const resp = await fetch(`https://api.spotify.com/v1/me/tracks`, {
    method: "PUT",
    body: JSON.stringify({
      ids: [trackId.replace("spotify:track:", "")],
    }),
  });

  if (resp.ok) {
    return;
  }

  const errorBody = await resp.json();
  const errorMessage =
    (errorBody && errorBody.error && errorBody.error.message) ||
    "An unexpected error occurred.";
  throw new Error(`Failed to add tag: ${errorMessage}`);
}

export async function removeFromSavedTracks(fetch: Fetch, trackId: string) {
  if (!/spotify:track:/.test(trackId)) {
    throw new Error("Local tracks can't exist in Liked Songs");
  }
  const resp = await fetch(`https://api.spotify.com/v1/me/tracks`, {
    method: "DELETE",
    body: JSON.stringify({
      ids: [trackId.replace("spotify:track:", "")],
    }),
  });

  if (resp.ok) {
    return;
  }
  throw new Error("Failed to remove tag.");
}

export async function fetchSavedTracks(fetch: Fetch) {
  const limit = 50;
  async function _fetchSavedTracks(offset = 0) {
    const resp = await fetch(
      `https://api.spotify.com/v1/me/tracks?limit=${limit}&offset=${offset}`,
    );
    return resp.json() as Promise<SpotifyApi.UsersSavedTracksResponse>;
  }
  const { items: firstPage, total } = await _fetchSavedTracks();
  const offsets = _.range(limit, total, limit);
  const subsequentPages = await Promise.all(
    offsets.map(offset => _fetchSavedTracks(offset).then(({ items }) => items)),
  );

  return _.flatten([firstPage, ...subsequentPages]);
}
