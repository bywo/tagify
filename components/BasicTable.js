import { observer } from "mobx-react";
import { reaction } from "mobx";
import { List, CellMeasurerCache } from "react-virtualized";
import TableRow from "./TableRow";

class BasicTable extends React.Component {
  render() {
    const filteredList = this.props.playlistStore.filteredTracks;

    const tagsByTrack = this.props.playlistStore.tagsByTrack;

    return (
      <React.Fragment>
        {filteredList.map(t => {
          const identifier = t.track.uri;
          const tags = tagsByTrack[identifier].map(
            playlistId => this.props.tagSelectOptionsMap[playlistId],
          );

          return (
            <TableRow
              key={t.track.uri}
              track={t.track}
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
