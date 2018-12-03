import _ from "lodash";

import xs from "xstream";
import { createEventHandler } from "../util/recompose";

const {
  handler: onSidebarResize,
  stream: sidebarDeltas$,
} = createEventHandler();
export { onSidebarResize };
export const sidebarWidth$ = sidebarDeltas$.fold((acc, x) => acc + x, 200);

const {
  handler: onTrackColResize,
  stream: trackColDeltas$,
} = createEventHandler();
export { onTrackColResize };
export const trackColWidth$ = trackColDeltas$.fold((acc, x) => acc + x, 200);

const {
  handler: onArtistColResize,
  stream: artistColDeltas$,
} = createEventHandler();
export { onArtistColResize };
export const artistColWidth$ = artistColDeltas$.fold((acc, x) => acc + x, 200);

const {
  handler: onSelectPlaylist,
  stream: selectedPlaylistChanges$,
} = createEventHandler();
export { onSelectPlaylist };
export const selectedPlaylist$ = selectedPlaylistChanges$.startWith("all");

const {
  handler: onChangeSearchQuery,
  stream: searchQueryChanges$,
} = createEventHandler();
export { onChangeSearchQuery };
export const searchQuery$ = searchQueryChanges$.startWith("");
