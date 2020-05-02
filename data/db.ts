import Dexie from "dexie";

const db = new Dexie("tagify");
db.version(1).stores({
  playlists: `&id`,
  playlistTracks: `&id`,
  tracks: `&uri`,
  misc: ``,
});
db.version(2).stores({
  artists: `&id`,
  audioFeatures: `&id`,
});

export const misc: Dexie.Table<any, string> = db.table("misc");
export const playlists: Dexie.Table<
  SpotifyApi.PlaylistObjectSimplified,
  string
> = db.table("playlists");
export const playlistTracks: Dexie.Table<PlaylistTrack, string> = db.table(
  "playlistTracks",
);
export const tracks: Dexie.Table<SpotifyApi.TrackObjectFull, string> = db.table(
  "tracks",
);
export const artists: Dexie.Table<
  SpotifyApi.ArtistObjectFull,
  string
> = db.table("artists");
export const audioFeatures: Dexie.Table<
  SpotifyApi.AudioFeaturesObject,
  string
> = db.table("audioFeatures");

declare global {
  interface Window {
    db: any;
  }
}

if (typeof window != "undefined") {
  window.db = db;
}

export default db;

export interface PlaylistTrack {
  id: string;
  snapshot_id: string;
  trackIds: string[];
}
