import { observer } from "mobx-react";
import { reaction } from "mobx";
import { List, CellMeasurerCache } from "react-virtualized";
import TableRow from "./TableRow";

class VirtualizedTable extends React.Component {
  constructor(props) {
    super(props);

    this._cache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 25,
      keyMapper: rowIndex => {
        const track = this.props.playlistStore.filteredTracks[rowIndex].track;
        return track.uri;
      },
    });

    reaction(
      () =>
        this.props.uiStore.state.trackColWidth +
        this.props.uiStore.state.artistColWidth +
        this.props.uiStore.mainPanelWidth,
      () => {
        this._cache.clearAll();
      },
    );

    // reaction(
    //   () => this.props.playlistStore.filteredTracks,
    //   () => {
    //     console.log("filteredtracks reaction");
    //     // this._cache.clearAll();
    //     this.listRef && this.listRef.forceUpdate();
    //   }
    // );

    reaction(
      () => this.props.playlistStore.searchState.query,
      () => {
        console.log("query reaction");
        this._cache.clearAll();
        this.listRef && this.listRef.forceUpdate();
      },
    );
  }
  render() {
    const filteredList = this.props.playlistStore.filteredTracks;

    const tagsByTrack = this.props.playlistStore.tagsByTrack;

    return (
      <List
        ref={ref => (this.listRef = ref)}
        width={this.props.uiStore.mainPanelWidth}
        height={this.props.uiStore.state.windowHeight - 100}
        deferredMeasurementCache={this._cache}
        rowCount={filteredList.length}
        rowHeight={this._cache.rowHeight}
        rowRenderer={({ key, index, parent, style }) => {
          const t = filteredList[index];
          const identifier = t.track.uri;
          const tags = tagsByTrack[identifier].map(
            playlistId => this.props.tagSelectOptionsMap[playlistId],
          );

          return (
            <div key={t.track.uri} style={style}>
              <TableRow
                style={style}
                index={index}
                parent={parent}
                cellMeasurerCache={this._cache}
                track={t.track}
                tags={tags}
                tagOptions={this.props.tagSelectOptions}
                trackColWidth={this.props.uiStore.state.trackColWidth}
                artistColWidth={this.props.uiStore.state.artistColWidth}
                addTag={this.props.playlistStore.addTag}
                removeTag={this.props.playlistStore.removeTag}
                createTagWithTrack={this.props.playlistStore.createTagWithTrack}
              />
            </div>
          );
        }}
      />
    );
  }
}

export default observer(VirtualizedTable);
