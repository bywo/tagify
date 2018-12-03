import _ from "lodash";

import xs from "xstream";
import { createEventHandler } from "../util/recompose";

const {
  handler: onResizeSidebar,
  stream: sidebarDeltas$,
} = createEventHandler();
export { onResizeSidebar };
export const sidebarWidth$ = sidebarDeltas$.fold((acc, x) => acc + x, 200);

const {
  handler: onResizeTrackCol,
  stream: trackColDeltas$,
} = createEventHandler();
export { onResizeTrackCol };
export const trackColWidth$ = trackColDeltas$.fold((acc, x) => acc + x, 200);

const {
  handler: onResizeArtistCol,
  stream: artistColDeltas$,
} = createEventHandler();
export { onResizeArtistCol };
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
