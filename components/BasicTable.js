import React from "react";
import TableRow from "./TableRow";

export default class BasicTable extends React.Component {
  render() {
    const {
      filteredTracks,
      tagsByTrack,
      tracksById,
      tagSelectOptions,
      tagSelectOptionsMap,
    } = this.props;

    return (
      <React.Fragment>
        {filteredTracks.map(identifier => {
          const t = tracksById[identifier];
          const tags = tagsByTrack[identifier].map(
            playlistId => tagSelectOptionsMap[playlistId],
          );

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
              addTag={undefined}
              removeTag={undefined}
              createTagWithTrack={undefined}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
