import { observable, autorun, computed, decorate } from "mobx";
import xs from "xstream";
import debounce from "xstream/extra/debounce";
import sampleCombine from "xstream/extra/sampleCombine";
import _ from "lodash";
import db from "./db";
import { fetch$ } from "./UserStore";
import { selectedPlaylist$ } from "./UIStore";

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

const playlistChanges$ = xs.create({
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
});

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
  .compose(debounce(30))
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

playlistFetches$.compose(sampleCombine(playlistTracks$, fetch$)).addListener({
  next([playlists, playlistTracks, fetch]) {
    console.log("after playlist fetch");
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
  .combine(selectedPlaylist$, playlistTracks$, allTracks$)
  .map(([selectedPlaylist, playlistTracks, allTracks]) => {
    if (selectedPlaylist === "all") {
      return allTracks;
    }
    return playlistTracks.find(pt => pt.id === selectedPlaylist).trackIds;
  })
  .remember();
filteredTracks$.addListener({
  next(t) {
    console.log("filteredTracks", t);
  },
  error(e) {
    console.error(e.stack);
  },
});

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
