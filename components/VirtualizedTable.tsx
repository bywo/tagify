import React from "react";
import TableRow from "./TableRow";
import theme from "../theme";
import { useSpotifyControls } from "../hooks/useSpotifyPlayer";
import VirtualizedList from "./VirtualizedList";

export default function BasicTable({
  selectedPlaylist,
  filteredTracks,
  tagsByTrack,
  tracksById,
  tagSelectOptions,
  tagSelectOptionsMap,
  addTag,
  removeTag,
  createAndAddTag,
  style,
}: {
  selectedPlaylist: string;
  filteredTracks: string[];
  tagsByTrack: { [k: string]: string[] };
  tracksById: { [k: string]: any };
  tagSelectOptions: any;
  tagSelectOptionsMap: any;
  addTag: (trackUri: string, playlistId: string) => void;
  removeTag: (trackUri: string, playlistId: string) => void;
  createAndAddTag: (trackUri: string, playlistName: string) => void;
  style: any;
}) {
  const { play } = useSpotifyControls();

  function renderItem(identifier: string) {
    const t = tracksById[identifier];
    const tagsForTrack = tagsByTrack[identifier];
    const tags = tagsForTrack
      ? tagsForTrack.map(playlistId => tagSelectOptionsMap[playlistId])
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
      />
    );
  }

  return (
    <VirtualizedList
      key={selectedPlaylist}
      style={style}
      items={filteredTracks}
      renderItem={renderItem}
    />
  );
}
