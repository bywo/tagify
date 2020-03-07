import React from "react";
import TableRow from "./TableRow";
import theme from "../theme";
import { useSpotifyControls } from "../hooks/useSpotifyPlayer";

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
}) {
  const { play } = useSpotifyControls();

  return (
    <div
      style={{
        padding: theme.spacing.l,
        overflow: "auto",
        ...style,
      }}
    >
      {filteredTracks.map(identifier => {
        const t = tracksById[identifier];
        const tagsForTrack = tagsByTrack[identifier];
        const tags = tagsForTrack
          ? tagsForTrack.map(playlistId => tagSelectOptionsMap[playlistId])
          : [];

        if (!t) {
          return null;
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
      })}
    </div>
  );
}
