import xs from "xstream";
import debounce from "xstream/extra/debounce";
import sampleCombine from "xstream/extra/sampleCombine";
import flattenConcurrently from "xstream/extra/flattenConcurrently";
import _ from "lodash";
import db from "./db";
import { user$, fetch$ } from "./UserStore";
import * as ui from "./UIStore";
import { selectedPlaylist$ } from "./UIStore";
import { createEventHandler } from "../util/recompose";
import * as api from "./api";

const resyncPlaylistsInterval = 1000 * 60 * 10; // 10 minutes

const { handler: addTag, stream: addTagEvents$ } = createEventHandler();
export { addTag };
const addedTags$ = addTagEvents$
  .compose(sampleCombine(fetch$))
  .map(async ([{ trackId, playlistId }, fetch]) => {
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
      return { trackId, playlistId };
    }
    throw new Error("failed to add");
  })
  .map(xs.fromPromise)
  .compose(flattenConcurrently);
addedTags$.addListener({
  async next({ trackId, playlistId }) {
    const pt = await db.playlistTracks.get(playlistId);
    if (!pt.trackIds.includes(trackId)) {
      pt.trackIds.push(trackId);
      await db.playlistTracks.put(pt);
    }
  },
});

const { handler: removeTag, stream: removeTagEvents$ } = createEventHandler();
export { removeTag };
const removedTags$ = removeTagEvents$
  .compose(sampleCombine(fetch$))
  .map(async ([{ trackId, playlistId }, fetch]) => {
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
      return { trackId, playlistId };
    }
    throw new Error("failed to remove");
  })
  .map(xs.fromPromise)
  .compose(flattenConcurrently);
removedTags$.addListener({
  async next({ trackId, playlistId }) {
    const pt = await db.playlistTracks.get(playlistId);
    if (pt.trackIds.includes(trackId)) {
      pt.trackIds = _.without(pt.trackIds, trackId);
      await db.playlistTracks.put(pt);
    }
  },
});

const {
  handler: createAndAddTag,
  stream: createAndAddTagEvents$,
} = createEventHandler();
export { createAndAddTag };
const createdTags$ = createAndAddTagEvents$
  .compose(sampleCombine(fetch$, user$))
  .map(async ([{ trackId, playlistName }, fetch, user]) => {
    const playlist = await api.createPlaylist(fetch, user.id, playlistName);
    return { trackId, playlist };
  })
  .map(xs.fromPromise)
  .compose(flattenConcurrently)
  .map(({ trackId, playlist }) =>
    xs
      .combine(
        playlistTracks$
          .filter(playlistTracks => _.find(playlistTracks, { id: playlist.id }))
          .take(1),
        xs.fromPromise(db.playlists.put(playlist)),
      )
      .mapTo({ trackId, playlist }),
  )
  .compose(flattenConcurrently);
createdTags$.addListener({
  async next({ trackId, playlist }) {
    console.log("created playlist", playlist, "gonna call addTag");
    addTag({ trackId, playlistId: playlist.id });
  },

  error(err) {
    console.error("createAndAddTag", err.stack);
  },
});

async function fetchPlaylists(
  fetch,
  url = "https://api.spotify.com/v1/me/playlists?limit=50",
) {
  const resp = await fetch(url);
  const { next, items } = await resp.json();

  let ret = items;
  if (next) {
    ret = items.concat(await fetchPlaylists(fetch, next));
  }
  return ret;
}

async function savePlaylistsToDb(playlists) {
  await db.playlists.bulkPut(
    playlists.map((p, index) => ({
      ...p,
      index,
    })),
  );

  const playlistIds = playlists.map(p => p.id);
  await db.playlists
    .where("id")
    .noneOf(playlistIds)
    .delete();
}

const validFetch$ = fetch$.filter(f => !!f);
const invalidFetch$ = fetch$.filter(f => !f);
const intervalAfterValidFetch = validFetch$
  .map(() => {
    console.log("interval before flatten");
    return xs.periodic(resyncPlaylistsInterval).startWith(0);
  })
  .flatten()
  .endWhen(invalidFetch$);
// whenever we have a valid fetch token, refresh playlists
const playlistFetches$ = xs
  .combine(validFetch$, intervalAfterValidFetch)
  .map(([fetch]) => {
    console.log("fetching playlists");
    return fetchPlaylists(fetch);
  })
  .map(xs.fromPromise)
  .flatten();

playlistFetches$.addListener({
  next(ps) {
    if (ps) {
      // HACK. try switching to xstream
      console.log("fetched playlists", ps);
      savePlaylistsToDb(ps);
    }
  },
});

const playlistChanges$ = xs
  .create({
    start(listener) {
      db.playlists.hook("creating", () => listener.next());

      db.playlists.hook("updating", modifications => {
        if (_.size(modifications) > 0) {
          listener.next();
        }
      });

      db.playlists.hook("deleting", () => listener.next());
    },
    stop() {},
  })
  .compose(debounce(0));

db.playlists.hook("deleting", async key => {
  console.log("playlist deleting");
  _.defer(() =>
    db.playlistTracks
      .where("id")
      .equals(key)
      .delete(),
  );
});

export const playlists$ = playlistChanges$
  .startWith(undefined)
  .map(() => {
    if (process.browser) {
      console.log("get from db");
      return db.playlists.toCollection().sortBy("index");
    }
    return Promise.resolve([]);
  })
  .map(xs.fromPromise)
  .flatten()
  .remember();

playlists$.addListener({
  next(playlists) {
    console.log("playlists", playlists);
  },
});

const playlistTrackChanges$ = xs.create({
  start(listener) {
    db.playlistTracks.hook("creating", () => listener.next());

    db.playlistTracks.hook("updating", modifications => {
      if (_.size(modifications) > 0) {
        listener.next();
      }
    });

    db.playlistTracks.hook("deleting", () => listener.next());
  },
  stop() {},
});

const playlistTracks$ = playlistTrackChanges$
  .startWith(undefined)
  .compose(debounce(30))
  .map(() => {
    if (process.browser) {
      console.log("get from db");
      return db.playlistTracks.toArray();
    }
    return Promise.resolve([]);
  })
  .map(xs.fromPromise)
  .flatten()
  .remember();
playlistTracks$.addListener({
  next(pt) {
    console.log("playlisttracks", pt);
  },
});

const allTracks$ = playlistTracks$
  .map(playlistTracks => _.uniq(_.flatten(_.map(playlistTracks, "trackIds"))))
  .remember();
allTracks$.addListener({
  next(pt) {
    console.log("allTracks", pt);
  },
});

async function fetchPlaylistTracks(fetch, playlistId, url) {
  const resp = await fetch(url);
  const { next, items } = await resp.json();

  let ret = items;
  if (next) {
    ret = items.concat(await fetchPlaylistTracks(fetch, playlistId, next));
  }
  return ret;
}

async function fetchAndSavePlaylistTracks(fetch, playlistId, snapshotId, url) {
  const tracks = await fetchPlaylistTracks(fetch, playlistId, url);
  await db.tracks.bulkPut(tracks.map(t => t.track));
  await db.playlistTracks.put({
    id: playlistId,
    snapshot_id: snapshotId,
    trackIds: tracks.map(t => t.track.uri),
  });
}

playlists$.compose(sampleCombine(playlistTracks$, fetch$)).addListener({
  next([playlists, playlistTracks, fetch]) {
    console.log("scanning for playlists to fetch");
    for (const p of playlists) {
      if (!_.find(playlistTracks, { id: p.id, snapshot_id: p.snapshot_id })) {
        console.log("couldn't find", p.id, p.snapshot_id);
        fetchAndSavePlaylistTracks(fetch, p.id, p.snapshot_id, p.tracks.href);
      }
    }
  },
});

export const tagsByTrack$ = playlistTracks$
  .map(playlistTracks => {
    const ret = {};
    for (const { id, trackIds } of playlistTracks) {
      for (const trackId of trackIds) {
        if (!ret[trackId]) {
          ret[trackId] = [];
        }
        if (!ret[trackId].includes(id)) {
          ret[trackId].push(id);
        }
      }
    }
    return ret;
  })
  .remember();
tagsByTrack$.addListener({
  next(t) {
    console.log("tagsByTrack", t);
  },
});

const trackChanges$ = xs.create({
  start(listener) {
    db.tracks.hook("creating", () => listener.next());

    db.tracks.hook("updating", modifications => {
      if (_.size(modifications) > 0) {
        listener.next();
      }
    });

    db.tracks.hook("deleting", () => listener.next());
  },
  stop() {},
});

export const tracksById$ = trackChanges$
  .startWith(undefined)
  .compose(debounce(30))
  .map(async () => {
    if (process.browser) {
      const tracks = await db.tracks.toArray();
      return _.keyBy(tracks, "uri");
    }
    return Promise.resolve({});
  })
  .map(xs.fromPromise)
  .flatten()
  .remember();
tracksById$.addListener({
  next(t) {
    console.log("tracksById", t);
  },
});

export const filteredTracks$ = xs
  .combine(
    selectedPlaylist$,
    playlistTracks$,
    allTracks$,
    tracksById$,
    ui.searchQuery$,
  )
  .map(
    ([
      selectedPlaylist,
      playlistTracks,
      allTracks,
      tracksById,
      searchQuery,
    ]) => {
      let tracks;
      if (selectedPlaylist === "all") {
        tracks = allTracks;
      } else {
        const playlistTrack = playlistTracks.find(
          pt => pt.id === selectedPlaylist,
        );
        tracks = playlistTrack ? playlistTrack.trackIds : [];
      }

      if (!searchQuery) {
        return tracks;
      }
      return tracks.filter(trackId => {
        const track = tracksById[trackId];
        return track && trackMatchesQuery(track, searchQuery);
      });
    },
  )
  .remember();
filteredTracks$.addListener({
  next(t) {
    console.log("filteredTracks", t);
  },
  error(e) {
    console.error(e.stack);
  },
});

function trackMatchesQuery(track, query) {
  return (
    track.name.toLowerCase().includes(query.toLowerCase()) ||
    track.artists.some(artist =>
      artist.name.toLowerCase().includes(query.toLowerCase()),
    )
  );
}
