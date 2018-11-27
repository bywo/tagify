import Dexie from "dexie";

const db = new Dexie("tagify");
db.version(1).stores({
  playlists: `&id`,
  playlistTracks: `&id`,
  tracks: `&uri`,
  misc: ``,
});

if (global.window) {
  window.db = db;
}

export default db;
