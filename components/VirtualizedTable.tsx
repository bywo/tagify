import React from "react";
import TableRow from "./TableRow";
import theme from "../theme";
import { useSpotifyControls } from "../hooks/useSpotifyPlayer";
import VirtualizedList from "./VirtualizedList";
import * as _ from "lodash";

export default function BasicTable({
  filteredTracks,
  tagsByTrack,
  tracksById,
  tagSelectOptions,
  tagSelectOptionsMap,
  addTag,
  removeTag,
  createAndAddTag,
  style,
  tagQuery,
  onClickTrack,
}: {
  filteredTracks: string[];
  tagsByTrack: { [k: string]: string[] };
  tracksById: { [k: string]: any };
  tagSelectOptions: any;
  tagSelectOptionsMap: any;
  addTag: (trackUri: string, playlistId: string) => void;
  removeTag: (trackUri: string, playlistId: string) => void;
  createAndAddTag: (trackUri: string, playlistName: string) => void;
  style: React.CSSProperties;
  tagQuery: string[];
  onClickTrack: (trackUri: string) => void;
}) {
  const { play } = useSpotifyControls();

  function renderItem(identifier: string) {
    const t = tracksById[identifier];
    const tagsForTrack = tagsByTrack[identifier];
    const tags = tagsForTrack
      ? _.without(tagsForTrack, ...tagQuery).map(
          playlistId => tagSelectOptionsMap[playlistId],
        )
      : [];

    if (!t) {
      return <div style={{ padding: 10 }}>Loading...</div>;
    }

    return (
      <TableRow
        key={identifier}
        track={t}
        tags={tags}
        tagOptions={tagSelectOptions}
        trackColWidth={200}
        artistColWidth={200}
        addTag={addTag}
        removeTag={removeTag}
        createAndAddTag={createAndAddTag}
        play={play}
        onClick={onClickTrack}
      />
    );
  }

  return (
    <VirtualizedList
      style={style}
      items={filteredTracks}
      renderItem={renderItem}
    />
  );
}
