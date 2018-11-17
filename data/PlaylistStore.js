import fetch from "../util/fetch";
import { observable, autorun, computed, decorate } from "mobx";
import _ from "lodash";

export default class PlaylistStore {
  constructor() {
    this.playlists = observable([]);
    this.tracksByPlaylist = observable({});
    this.tracksById = {};
    this.searchState = observable({
      query: "",
      selectedPlaylistId: "all",
      numFetches: 0
    });
    this.user = {};

    this.playlists.observe(changeData => {
      console.log("changedata", changeData);
      if (changeData.type === "splice") {
        changeData.added.forEach(p => {
          this.fetchTracks(p.id, p.tracks.href);
        });
      }
    });

    this.fetchUserProfile();
    this.fetchPlaylists();
  }

  async fetchUserProfile() {
    const resp = await fetch("https://api.spotify.com/v1/me");
    const data = await resp.json();
    this.user = data;
  }

  async fetchPlaylists(
    url = "https://api.spotify.com/v1/me/playlists?limit=50"
  ) {
    this.searchState.numFetches += 1;
    const resp = await fetch(url);
    this.searchState.numFetches -= 1;
    const { next, items } = await resp.json();
    this.playlists.push(...items);

    // if (next) {
    //   console.log("calling next", next);
    //   this.fetchPlaylists(next);
    // }
  }

  async fetchTracks(playlistId, url) {
    this.searchState.numFetches += 1;
    const resp = await fetch(url);
    const { next, items } = await resp.json();

    if (!this.tracksByPlaylist[playlistId]) {
      this.tracksByPlaylist[playlistId] = [];
    }

    if (items) {
      this.tracksByPlaylist[playlistId].push(...items);

      items.forEach(track => (this.tracksById[track.track.uri] = track));
    }

    this.searchState.numFetches -= 1;

    // if (next) {
    //   this.fetchTracks(playlistId, next);
    // }
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
    return _.sortBy(
      _.uniqBy(
        _.flatten(Object.values(this.tracksByPlaylist)),
        t => t.track.uri
      ),
      t => t.track.name
    );
  }

  get tagsByTrack() {
    console.log("computing tagsByTrack");
    const ret = {};

    _.forEach(this.tracksByPlaylist, (tracks, playlistId) => {
      tracks.forEach(t => {
        const identifier = t.track.uri;
        if (!ret[identifier]) {
          ret[identifier] = [];
        }

        if (!ret[identifier].includes(playlistId)) {
          ret[identifier].push(playlistId);
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

    const filteredList = this.searchState.query
      ? tracksForSelectedList.filter(t => {
          const query = this.searchState.query.toLowerCase();
          return (
            t.track.name.toLowerCase().includes(query) ||
            _.some(t.track.artists, a => {
              return a.name.toLowerCase().includes(query);
            })
          );
        })
      : tracksForSelectedList;

    return filteredList;
  }

  addTag = async (trackUri, playlistId) => {
    const resp = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        method: "POST",
        body: JSON.stringify({
          uris: [trackUri]
        })
      }
    );

    if (resp.ok) {
      const add = () =>
        this.tracksByPlaylist[playlistId].push(this.tracksById[trackUri]);
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
    // const resp = await fetch(
    //   `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    //   {
    //     method: "DELETE",
    //     body: JSON.stringify({
    //       tracks: [{ uri: trackUri }]
    //     })
    //   }
    // );

    // if (resp.ok) {
    this.tracksByPlaylist[playlistId] = this.tracksByPlaylist[
      playlistId
    ].filter(t => t.track.uri !== trackUri);
    // } else {
    // }
  };

  createTagWithTrack = async (trackUri, playlistName) => {
    const resp = await fetch(
      `https://api.spotify.com/v1/users/${this.user.id}/playlists`,
      {
        method: "POST",
        body: JSON.stringify({
          name: playlistName,
          description: "Created by Tagify."
        })
      }
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
  playlistsById: computed,
  playlistIds: computed,
  allTracks: computed,
  tagsByTrack: computed,
  filteredTracks: computed
});
