import xs from "xstream";
import debounce from "xstream/extra/debounce";
import sampleCombine from "xstream/extra/sampleCombine";
import dropUntil from "xstream/extra/dropUntil";
import flattenConcurrently from "xstream/extra/flattenConcurrently";
import dropRepeats from "xstream/extra/dropRepeats";
import _ from "lodash";
import db, { savedTracks } from "./db";
import { user$, fetch$ } from "./UserStore";
import * as ui from "./UIStore";
import { selectedPlaylist$ } from "./UIStore";
import { createEventHandler } from "../util/recompose";
import * as api from "./api";

// Querying
// All tracks: all records in tracks collection
// tracks by name: create track.artistName array. use multiEntry index
// tracks by playlist: ???

const resyncPlaylistsInterval = 1000 * 60 * 10; // 10 minutes
const savedTracksTag = {
  id: "savedTracks",
  name: "Liked Songs",
};

// Array<{playlistId, trackId}>
let pendingPlaylistAdds = [];
async function fetchAndSavePlaylistTracks(
  fetch,
  playlistId,
  snapshotId,
  total,
) {
  const tracks = await api.fetchPlaylistTracks(fetch, playlistId, total);

  await db.tracks.bulkPut(tracks);

  let trackIds = tracks.map(t => t.uri);

  // HACK: working around race condition when creating new playlist and adding track
  const pendingAdds = pendingPlaylistAdds.filter(
    ({ playlistId: pId }) => pId === playlistId,
  );
  pendingPlaylistAdds = _.without(pendingPlaylistAdds, ...pendingAdds);
  trackIds = _.uniq([
    ...trackIds,
    ...pendingAdds.map(({ trackId }) => trackId),
  ]);

  await db.playlistTracks.put({
    id: playlistId,
    snapshot_id: snapshotId,
    trackIds,
  });

  return playlistId;
}

const { handler: onError, stream: errors$ } = createEventHandler();
const {
  handler: dismissError,
  stream: errorDismissals$,
} = createEventHandler();
export { dismissError };

export const errorList$ = xs
  .merge(
    errors$.map(err => ({ type: "newError", payload: err })),
    errorDismissals$.map(err => ({ type: "dismissError", payload: err })),
  )
  .fold((errorList, action) => {
    if (action.type === "newError") {
      return [...errorList, action.payload];
    }
    return _.without(errorList, action.payload);
  }, []);

const forwardErrorToErrorCollector = response$ =>
  response$.replaceError(err => {
    onError(err);
    return xs.of();
  });

const { handler: addTag, stream: addTagEvents$ } = createEventHandler();
export { addTag, addTagEvents$ };
const addedTags$ = addTagEvents$
  .compose(sampleCombine(fetch$))
  .map(async ([{ trackId, playlistId }, fetch]) => {
    if (playlistId === savedTracksTag.id) {
      await api.addToSavedTracks(fetch, trackId);
    } else {
      await api.addToPlaylist(fetch, playlistId, trackId);
    }
    return { trackId, playlistId };
  })
  .map(xs.fromPromise)
  .map(forwardErrorToErrorCollector)
  .compose(flattenConcurrently);
addedTags$.addListener({
  async next({ trackId, playlistId }) {
    if (playlistId === savedTracksTag.id) {
      await db.savedTracks.put({
        id: trackId,
        added_at: new Date(),
      });
    } else {
      const pt = await db.playlistTracks.get(playlistId);
      if (!pt) {
        // HACK: working around race condition where initial fetch of new playlist's tracks
        // fires concurrently with POSTing new tracks
        pendingPlaylistAdds = [...pendingPlaylistAdds, { playlistId, trackId }];
      } else if (!pt.trackIds.includes(trackId)) {
        pt.trackIds.push(trackId);
        await db.playlistTracks.put(pt);
      }
    }
  },
});

const { handler: removeTag, stream: removeTagEvents$ } = createEventHandler();
export { removeTag, removeTagEvents$ };
const removedTags$ = removeTagEvents$
  .compose(sampleCombine(fetch$))
  .map(async ([{ trackId, playlistId }, fetch]) => {
    if (playlistId === savedTracksTag.id) {
      await api.removeFromSavedTracks(fetch, trackId);
    } else {
      await api.removeFromPlaylist(fetch, playlistId, trackId);
    }
    return { trackId, playlistId };
  })
  .map(xs.fromPromise)
  .map(forwardErrorToErrorCollector)
  .compose(flattenConcurrently);
removedTags$.addListener({
  async next({ trackId, playlistId }) {
    if (playlistId === savedTracksTag.id) {
      await db.savedTracks.delete(trackId);
    } else {
      const pt = await db.playlistTracks.get(playlistId);
      if (pt.trackIds.includes(trackId)) {
        pt.trackIds = _.without(pt.trackIds, trackId);
        await db.playlistTracks.put(pt);
      }
    }
  },
});

const {
  handler: createAndAddTag,
  stream: createAndAddTagEvents$,
} = createEventHandler();
export { createAndAddTag, createAndAddTagEvents$ };
const createdTags$ = createAndAddTagEvents$
  .compose(sampleCombine(fetch$, user$))
  .map(async ([{ trackId, playlistName }, fetch, user]) => {
    const playlist = await api.createPlaylist(fetch, user.id, playlistName);
    return { trackId, playlist };
  })
  .map(xs.fromPromise)
  .map(forwardErrorToErrorCollector)
  .compose(flattenConcurrently)
  .map(({ trackId, playlist }) =>
    xs
      .combine(
        // playlistTracks$
        //   .filter(playlistTracks => _.find(playlistTracks, { id: playlist.id }))
        //   .take(1),
        xs.fromPromise(db.playlists.put(playlist)),
      )
      .mapTo({ trackId, playlist }),
  )
  .compose(flattenConcurrently);
createdTags$.addListener({
  async next({ trackId, playlist }) {
    addTag({ trackId, playlistId: playlist.id });
  },

  error(err) {
    console.error("createAndAddTag", err.stack);
  },
});

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

async function saveSavedTracksToDb(savedTracks) {
  const savedTracksLite = savedTracks
    .filter(st => st.track && st.track.uri)
    .map(st => ({
      added_at: new Date(st.added_at),
      id: st.track.uri,
    }));

  const tracks = savedTracks
    .filter(st => st.track && st.track.uri)
    .map(st => st.track);

  await db.savedTracks.clear();
  await db.savedTracks.bulkPut(savedTracksLite);
  await db.tracks.bulkPut(tracks);
}

const validFetch$ = fetch$.filter(f => !!f);
const invalidFetch$ = fetch$.filter(f => !f);
const intervalAfterValidFetch = validFetch$
  .map(() => xs.periodic(resyncPlaylistsInterval).startWith(0))
  .flatten()
  .endWhen(invalidFetch$);
// whenever we have a valid fetch token, refresh playlists
const playlistFetches$ = xs
  .combine(validFetch$, intervalAfterValidFetch)
  .map(([fetch]) => api.fetchPlaylists(fetch))
  .map(xs.fromPromise)
  .flatten();

playlistFetches$.addListener({
  next(ps) {
    if (ps) {
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
      return db.playlists.toCollection().sortBy("index");
    }
    return Promise.resolve([]);
  })
  .map(xs.fromPromise)
  .flatten()
  .remember();

export const tags$ = playlists$.map(p => [...p, savedTracksTag]);

export const tagsById$ = tags$
  .map(playlists => _.keyBy(playlists, "id"))
  .remember();

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

const playlistsTracksToFetch$ = playlists$
  .map(async playlists => {
    const playlistTracks = await db.playlistTracks.toArray();
    const toFetch = playlists.filter(p => {
      return !_.find(playlistTracks, {
        id: p.id,
        snapshot_id: p.snapshot_id,
      });
    });
    return xs.fromArray(toFetch);
  })
  .map(xs.fromPromise)
  .flatten()
  .flatten();

const playlistTrackFetches$ = playlistsTracksToFetch$
  .compose(sampleCombine(fetch$))
  .map(([p, fetch]) => {
    return xs.fromPromise(
      fetchAndSavePlaylistTracks(fetch, p.id, p.snapshot_id, p.tracks.total),
    );
  })
  .compose(flattenConcurrently);

const playlistTrackFetchQueue$ = xs
  .merge(
    playlistsTracksToFetch$.map(p => ({ type: "add", playlistId: p.id })),
    playlistTrackFetches$.map(playlistId => ({ type: "remove", playlistId })),
  )
  .fold((acc, t) => {
    if (t.type === "add") {
      return [...acc, t.playlistId];
    }
    return _.without(acc, t.playlistId);
  }, []);

// whenever we have a valid fetch token, refresh saved tracks
const savedTrackFetches$ = xs
  .combine(validFetch$, intervalAfterValidFetch)
  .map(([fetch]) => api.fetchSavedTracks(fetch))
  .map(xs.fromPromise)
  .flatten();

savedTrackFetches$.addListener({
  next(savedTracks) {
    if (savedTracks) {
      saveSavedTracksToDb(savedTracks);
    }
  },
});
const savedTrackChanges$ = xs
  .create({
    start(listener) {
      db.savedTracks.hook("creating", () => listener.next());

      db.savedTracks.hook("updating", modifications => {
        if (_.size(modifications) > 0) {
          listener.next();
        }
      });

      db.savedTracks.hook("deleting", () => listener.next());
    },
    stop() {},
  })
  .compose(debounce(0));

const initStarted$ = validFetch$.take(1);

const isFetchingPlaylistTracks$ = playlistTrackFetchQueue$
  .compose(sampleCombine(initStarted$))
  .map(([fetchQueue, initStarted]) => {
    if (fetchQueue.length === 0 && initStarted) {
      return false;
    }
    return true;
  })
  .compose(dropRepeats());

// once we hit false, only return false
export const isPerformingInitialFetches$ = isFetchingPlaylistTracks$
  .fold((acc, next) => {
    if (acc === false) {
      return false;
    }
    return next;
  }, true)
  .compose(dropRepeats())
  .remember();

const playlistTracks$ = xs
  .merge(
    playlistTrackChanges$.compose(
      sampleCombine(isFetchingPlaylistTracks$.filter(v => v === false)),
    ),
    isFetchingPlaylistTracks$.filter(v => v === false),
  )
  .compose(debounce(30))
  .map(() => {
    if (process.browser) {
      return db.playlistTracks.toArray();
    }
    return Promise.resolve([]);
  })
  .map(xs.fromPromise)
  .flatten()
  .remember();

const savedTracks$ = savedTrackChanges$
  .map(() => {
    return db.savedTracks.toArray();
  })
  .map(xs.fromPromise)
  .flatten()
  .remember();

export const allTracks$ = xs
  .combine(playlistTracks$, savedTracks$)
  .map(([playlistTracks, savedTracks]) =>
    _.uniq([
      ..._.flatten(_.map(playlistTracks, "trackIds")),
      ...savedTracks.map(st => st.id),
    ]),
  )
  .remember();

export const tagsByTrack$ = xs
  .combine(playlistTracks$, savedTracks$)
  .map(([playlistTracks, savedTracks]) => {
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

    for (const { id: trackId } of savedTracks) {
      if (!ret[trackId]) {
        ret[trackId] = [];
      }
      if (!ret[trackId].includes(savedTracksTag.id)) {
        ret[trackId].push(savedTracksTag.id);
      }
    }
    return ret;
  })
  .remember();

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

export const tracksById$ = xs
  .merge(
    trackChanges$.compose(
      dropUntil(isFetchingPlaylistTracks$.filter(v => v === false)),
    ),
    isFetchingPlaylistTracks$.filter(v => v === false),
  )
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
  .debug("tracksById")
  .remember();

export const tagsWithNumOverlapping$ = xs
  .combine(ui.tagQuery$, playlists$, playlistTracks$, savedTracks$)
  .map(([tagQuery, playlists, playlistTracks, savedTracks]) => {
    console.log("in here", tagQuery);
    if (tagQuery.length) {
      const trackIdsInQuery = _.intersection(
        ...tagQuery.map(id => {
          if (id === savedTracksTag.id) {
            return savedTracks.map(st => st.id);
          }
          const playlistTrack = playlistTracks.find(pt => pt.id === id);

          return playlistTrack ? playlistTrack.trackIds : [];
        }),
      );

      const playlistsNotInQuery = playlists.filter(
        p => !tagQuery.includes(p.id),
      );

      const playlistsOverlapping = playlistsNotInQuery.map(p => {
        const pt = playlistTracks.find(pt => pt.id === p.id);
        const trackIds = pt ? pt.trackIds : [];
        return {
          tag: p,
          numOverlapping: _.intersection(trackIdsInQuery, trackIds).length,
        };
      });

      if (tagQuery.includes(savedTracksTag.id)) {
        return playlistsOverlapping;
      }

      const savedTracksOverlapping = {
        tag: savedTracksTag,
        numOverlapping: _.intersection(
          trackIdsInQuery,
          savedTracks.map(st => st.id),
        ).length,
      };

      return [savedTracksOverlapping, ...playlistsOverlapping];
    }
    return [
      { tag: savedTracksTag, numOverlapping: savedTracks.length },
      ...playlists.map(p => ({
        tag: p,
        numOverlapping: p.tracks.total,
      })),
    ];
  })
  .debug("tagsWithNum")
  .remember();

// export const tagsByNumOverlappingTracks$ = xs
//   .combine(trackIdsFilteredByQueryTags$, tagsByTrack$, ui.tagQuery$)
//   .map(([trackIds, tagsByTrack, query]) => {
//     return _.without(
//       _.uniq(trackIds.flatMap(id => tagsByTrack[id])),
//       query.tags,
//     );
//   });

// TODO: use trackIdsFilteredByQueryTags
export const filteredTracks$ = xs
  .combine(
    ui.tagQuery$,
    playlistTracks$,
    allTracks$,
    tracksById$,
    ui.searchText$,
    savedTracks$,
  )
  .map(
    ([
      tagQuery,
      playlistTracks,
      allTracks,
      tracksById,
      searchText,
      savedTracks,
    ]) => {
      let tracks;
      if (tagQuery.length === 0) {
        tracks = allTracks;
      } else {
        tracks = _.intersection(
          ...tagQuery.map(id => {
            if (id === savedTracksTag.id) {
              return savedTracks.map(st => st.id);
            }
            const playlistTrack = playlistTracks.find(pt => pt.id === id);

            return playlistTrack ? playlistTrack.trackIds : [];
          }),
        );
      }

      if (!searchText) {
        return tracks;
      }
      return tracks.filter(trackId => {
        const track = tracksById[trackId];
        return track && trackMatchesQuery(track, searchText);
      });
    },
  )
  .debug(() => console.log("refiltered tracks"))
  .remember();

function trackMatchesQuery(track, query) {
  return (
    track.name.toLowerCase().includes(query.toLowerCase()) ||
    (track.artists &&
      track.artists.some(artist =>
        artist.name.toLowerCase().includes(query.toLowerCase()),
      ))
  );
}
