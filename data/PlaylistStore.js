import { observable, autorun, computed, decorate } from "mobx";
import * as rxjs from "rxjs";
import _ from "lodash";
import {
  map,
  switchMap,
  debounce,
  debounceTime,
  withLatestFrom,
  startWith,
  filter,
} from "rxjs/operators";
import db from "./db";
import { fetch$ } from "./UserStore";

const resyncPlaylistsInterval = 1000 * 60 * 10; // 10 minutes

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

// whenever we have a valid fetch token, refresh playlists
const playlistFetches$ = new rxjs.Subject();
rxjs
  .combineLatest(
    fetch$.pipe(filter(f => !!f)),
    rxjs.interval(resyncPlaylistsInterval).pipe(startWith(0)),
  )
  .pipe(switchMap(([fetch]) => fetchPlaylists(fetch)))
  .subscribe(playlistFetches$);

playlistFetches$.subscribe(async ps => {
  if (ps) {
    // HACK. try switching to xstream
    console.log("fetched playlists", ps);
    savePlaylistsToDb(ps);
  }
});
// fetch$.subscribe(fetch => {
//   console.log("heyo fetch$", fetch);
//   syncPlaylists(fetch);
// });

const playlistChanges$ = new rxjs.BehaviorSubject();
db.playlists.hook("creating", (key, p) => {
  playlistChanges$.next();
});

db.playlists.hook("updating", (modifications, key, p) => {
  if (_.size(modifications) > 0) {
    playlistChanges$.next();
  }
});

db.playlists.hook("deleting", async key => {
  console.log("playlist deleting");
  playlistChanges$.next();
  _.defer(() =>
    db.playlistTracks
      .where("id")
      .equals(key)
      .delete(),
  );
});

const playlists$ = new rxjs.Subject();
playlistChanges$
  .pipe(
    debounceTime(30),
    switchMap(() => {
      if (process.browser) {
        console.log("get from db");
        return db.playlists.toCollection().sortBy("index");
      }
      return Promise.resolve([]);
    }),
  )
  .subscribe(playlists$);
playlists$.subscribe(playlists => {
  console.log("playlists", playlists);
});
playlists$.subscribe(playlists => {
  console.log("playlists2", playlists);
});

const playlistTrackChanges$ = new rxjs.BehaviorSubject();
db.playlistTracks.hook("creating", (key, p) => {
  playlistTrackChanges$.next();
});

db.playlistTracks.hook("updating", (modifications, key, p) => {
  if (_.size(modifications) > 0) {
    playlistTrackChanges$.next();
  }
});

db.playlistTracks.hook("deleting", key => {
  playlistTrackChanges$.next();
});

const playlistTracks$ = new rxjs.Subject();
playlistTrackChanges$
  .pipe(
    debounceTime(30),
    switchMap(() => {
      if (process.browser) {
        console.log("get from db");
        return db.playlistTracks.toArray();
      }
      return Promise.resolve([]);
    }),
  )
  .subscribe(playlistTracks$);
playlistTracks$.subscribe(pt => {
  console.log("playlisttracks", pt);
});

playlistFetches$
  .pipe(withLatestFrom(playlistTracks$, fetch$))
  .subscribe(([playlists, playlistTracks, fetch]) => {
    console.log("checking", playlists, playlistTracks);
    for (const p of playlists) {
      if (!_.find(playlistTracks, { id: p.id, snapshot_id: p.snapshot_id })) {
        console.log("couldn't find", p.id, p.snapshot_id);
        fetchAndSavePlaylistTracks(fetch, p.id, p.snapshot_id, p.tracks.href);
      }
    }
  });

playlistTracks$.pipe(
  map(playlistTracks => {
    const ret = {};
    playlistTracks.forEach(({ id, trackIds }) => {
      ret[id] = trackIds;
    });
    return ret;
  }),
);
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

const tagsByTrack = new rxjs.BehaviorSubject({});
playlistTracks$
  .pipe(
    map(playlistTracks => {
      const ret = {};

      _.forEach(playlistTracks, ({ id: playlistId, trackIds }) => {
        trackIds.forEach(uri => {
          if (!ret[uri]) {
            ret[uri] = [];
          }

          if (!ret[uri].includes(playlistId)) {
            ret[uri].push(playlistId);
          }
        });
      });

      return ret;
    }),
  )
  .subscribe(tagsByTrack);

tagsByTrack.subscribe(t => {
  console.log("tagsByTrack", t);
});

const trackChanges$ = new rxjs.BehaviorSubject();
db.tracks.hook("creating", (key, p) => {
  trackChanges$.next();
});

db.tracks.hook("updating", (modifications, key, p) => {
  if (_.size(modifications) > 0) {
    trackChanges$.next();
  }
});

db.tracks.hook("deleting", key => {
  trackChanges$.next();
});

const tracksById$ = new rxjs.Subject();
trackChanges$
  .pipe(
    debounceTime(30),
    switchMap(async () => {
      if (process.browser) {
        const tracks = await db.tracks.toArray();
        return _.keyBy(tracks, "uri");
      }
      return Promise.resolve({});
    }),
  )
  .subscribe(tracksById$);

export default class PlaylistStore {
  constructor() {
    this.playlists = [];
    this.tracksByPlaylist = {};
    this.tracksById = {};
    this.searchState = observable({
      query: "",
      selectedPlaylistId: "all",
      numFetches: 0,
    });
    this.user = {};
  }

  get playlistsById() {
    return _.keyBy(this.playlists, "id");
  }

  get playlistSelectValues() {
    return this.playlists.map(p => ({ value: p.id, label: p.name }));
  }

  get playlistIds() {
    return this.playlists.map(p => p.id);
  }

  get allTracks() {
    return _.uniqBy(_.flatten(Object.values(this.tracksByPlaylist)), t => t);
  }

  get tagsByTrack() {
    const ret = {};

    _.forEach(this.tracksByPlaylist, (trackIds, playlistId) => {
      trackIds.forEach(uri => {
        if (!ret[uri]) {
          ret[uri] = [];
        }

        if (!ret[uri].includes(playlistId)) {
          ret[uri].push(playlistId);
        }
      });
    });

    return ret;
  }

  get filteredTracks() {
    const tracksForSelectedList =
      (this.searchState.selectedPlaylistId === "all"
        ? this.allTracks
        : this.tracksByPlaylist[this.searchState.selectedPlaylistId]) || [];

    // TODO
    const filteredList = tracksForSelectedList;
    // const filteredList = this.searchState.query
    //   ? tracksForSelectedList.filter(t => {
    //       const query = this.searchState.query.toLowerCase();
    //       return (
    //         t.track.name.toLowerCase().includes(query) ||
    //         _.some(t.track.artists, a => a.name.toLowerCase().includes(query))
    //       );
    //     })
    //   : tracksForSelectedList;

    return filteredList;
  }

  addTag = async (trackUri, playlistId) => {
    const resp = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        method: "POST",
        body: JSON.stringify({
          uris: [trackUri],
        }),
      },
    );

    if (resp.ok) {
      const add = () => this.tracksByPlaylist[playlistId].push(trackUri);
      if (this.tracksByPlaylist[playlistId]) {
        add();
      } else {
        // we're probably fetching the playlist
        const dispose = autorun(() => {
          if (this.tracksByPlaylist[playlistId]) {
            dispose();
            add();
          }
        });
      }
    } else {
    }
  };

  removeTag = async (trackUri, playlistId) => {
    const resp = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        method: "DELETE",
        body: JSON.stringify({
          tracks: [{ uri: trackUri }],
        }),
      },
    );

    if (resp.ok) {
      this.tracksByPlaylist[playlistId] = this.tracksByPlaylist[
        playlistId
      ].filter(uri => uri !== trackUri);
    } else {
    }
  };

  createTagWithTrack = async (trackUri, playlistName) => {
    const resp = await fetch(
      `https://api.spotify.com/v1/users/${this.user.id}/playlists`,
      {
        method: "POST",
        body: JSON.stringify({
          name: playlistName,
          description: "Created by Tagify.",
        }),
      },
    );
    if (!resp.ok) {
      throw new Error("Couldn't create tag");
    }

    const playlist = await resp.json();
    this.playlists.push(playlist);

    this.addTag(trackUri, playlist.id);
  };
}

decorate(PlaylistStore, {
  playlists: observable,
  tracksByPlaylist: observable,
  tracksById: observable,
  playlistsById: computed,
  playlistIds: computed,
  allTracks: computed,
  tagsByTrack: computed,
  filteredTracks: computed,
});
