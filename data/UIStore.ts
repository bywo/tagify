import { createEventHandler } from "../util/recompose";
import xs, { Observable, Stream, MemoryStream } from "xstream";
import * as _ from "lodash";

const { handler: onResizeSidebar, stream: sidebarDeltas$ } = createEventHandler<
  number,
  Stream<number>
>();
export { onResizeSidebar };
export const sidebarWidth$ = sidebarDeltas$.fold((acc, x) => acc + x, 200);

const {
  handler: onResizeTrackCol,
  stream: trackColDeltas$,
} = createEventHandler<number, Stream<number>>();
export { onResizeTrackCol };
export const trackColWidth$ = trackColDeltas$.fold((acc, x) => acc + x, 200);

const {
  handler: onResizeArtistCol,
  stream: artistColDeltas$,
} = createEventHandler<number, Stream<number>>();
export { onResizeArtistCol };
export const artistColWidth$ = artistColDeltas$.fold((acc, x) => acc + x, 200);

const {
  handler: onSelectPlaylist,
  stream: selectedPlaylistChanges$,
} = createEventHandler<string, Stream<string>>();
export { onSelectPlaylist, selectedPlaylistChanges$ };
export const selectedPlaylist$ = selectedPlaylistChanges$.startWith("all");

const {
  handler: onChangeSearchText,
  stream: searchTextChanges$,
} = createEventHandler<string, Stream<string>>();
const searchText$ = searchTextChanges$.startWith("");
export { onChangeSearchText, searchTextChanges$, searchText$ };

const { handler: onAddTagToQuery, stream: queryTagAdds$ } = createEventHandler<
  string,
  Stream<string>
>();
const {
  handler: onRemoveTagFromQuery,
  stream: queryTagRemoves$,
} = createEventHandler<string, Stream<string>>();
export { onAddTagToQuery, onRemoveTagFromQuery };

// TODO: remove
queryTagAdds$.subscribe({
  next: v => console.log("onAdd", v),
});

export const tagQuery$: MemoryStream<string[]> = xs
  .merge(
    queryTagAdds$.map(id => ({ type: "add" as "add", id })),
    queryTagRemoves$.map(id => ({ type: "remove" as "remove", id })),
  )
  .fold((query: string[], event): string[] => {
    if (event.type === "add") {
      return _.uniq([...query, event.id]);
    } else {
      return _.without(query, event.id);
    }
  }, []);

const {
  handler: setIsSearchingByTags,
  stream: isSearchingByTagsChanges$,
} = createEventHandler<boolean, Stream<boolean>>();
const isSearchingByTags$ = isSearchingByTagsChanges$.startWith(false);
export { setIsSearchingByTags, isSearchingByTags$ };

// HACK: need to subscribe immediately for values to go through
isSearchingByTags$.subscribe({
  next: () => {},
});

const {
  handler: onChangeTagSearchText,
  stream: tagSearchTextChanges$,
} = createEventHandler<string, Stream<string>>();
const tagSearchText$ = xs.merge(
  tagSearchTextChanges$.startWith(""),
  queryTagAdds$.map(() => ""),
);
export { onChangeTagSearchText, tagSearchText$ };

const {
  handler: onChangeFocusedTrack,
  stream: focusedTrackChanges$,
} = createEventHandler<string | undefined, Stream<string | undefined>>();
const focusedTrack$ = focusedTrackChanges$.startWith(undefined);
export { onChangeFocusedTrack, focusedTrack$ };

const {
  handler: setIsEditingTags,
  stream: isEditingTagsChanges$,
} = createEventHandler<boolean, Stream<boolean>>();
const isEditingTags$ = isEditingTagsChanges$.startWith(false);
export { setIsEditingTags, isEditingTags$ };
