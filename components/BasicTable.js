import React from "react";
import { observer } from "mobx-react";
import TableRow from "./TableRow";

class BasicTable extends React.Component {
  render() {
    const filteredList = this.props.playlistStore.filteredTracks;

    const tagsByTrack = this.props.playlistStore.tagsByTrack;

    return (
      <React.Fragment>
        {filteredList.map(identifier => {
          const t = this.props.playlistStore.tracksById[identifier];
          const tags = tagsByTrack[identifier].map(
            playlistId => this.props.tagSelectOptionsMap[playlistId],
          );

          if (!t) {
            return null;
          }

          return (
            <TableRow
              key={identifier}
              track={t}
              tags={tags}
              tagOptions={this.props.tagSelectOptions}
              trackColWidth={this.props.uiStore.state.trackColWidth}
              artistColWidth={this.props.uiStore.state.artistColWidth}
              addTag={this.props.playlistStore.addTag}
              removeTag={this.props.playlistStore.removeTag}
              createTagWithTrack={this.props.playlistStore.createTagWithTrack}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default observer(BasicTable);
