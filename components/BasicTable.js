import React from "react";
import TableRow from "./TableRow";
import theme from "../theme";

export default class BasicTable extends React.Component {
  render() {
    const {
      filteredTracks,
      tagsByTrack,
      tracksById,
      tagSelectOptions,
      tagSelectOptionsMap,
      addTag,
      removeTag,
      createAndAddTag,
    } = this.props;

    return (
      <div style={{ padding: theme.spacing.l, overflow: "auto" }}>
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
            />
          );
        })}
      </div>
    );
  }
}
