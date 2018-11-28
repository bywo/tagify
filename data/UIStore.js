import _ from "lodash";

import xs from "xstream";

export const sidebarDeltas$ = xs.create();
export const sidebarWidth$ = sidebarDeltas$.fold((acc, x) => acc + x, 200);

export const trackColDeltas$ = xs.create();
export const trackColWidth$ = trackColDeltas$.fold((acc, x) => acc + x, 200);

export const artistColDeltas$ = xs.create();
export const artistColWidth$ = artistColDeltas$.fold((acc, x) => acc + x, 200);

export const selectedPlaylistChanges$ = xs.create();
export const selectedPlaylist$ = selectedPlaylistChanges$.startWith("all");

export const searchQueryChanges$ = xs.create();
export const searchQuery$ = searchQueryChanges$.startWith("");
