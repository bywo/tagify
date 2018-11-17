import { observer } from "mobx-react";
import { reaction, decorate, computed } from "mobx";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache
} from "react-virtualized";
import ResizeHandle from "./ResizeHandle";
import TableRow from "./TableRow";
import randomMC from "random-material-color";

class Table extends React.Component {
  constructor(props) {
    super(props);

    this._cache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 25,
      keyMapper: rowIndex => {
        const track = this.props.playlistStore.filteredTracks[rowIndex].track;
        return track.uri;
      }
    });

    reaction(
      () =>
        this.props.uiStore.state.trackColWidth +
        this.props.uiStore.state.artistColWidth +
        this.props.uiStore.mainPanelWidth,
      () => {
        this._cache.clearAll();
      }
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
      }
    );
  }
  render() {
    console.log("render");
    if (this.props.playlistStore.searchState.numFetches) {
      return (
        <div>Loading...{this.props.playlistStore.searchState.numFetches}</div>
      );
    }

    const filteredList = this.props.playlistStore.filteredTracks;

    const tagsByTrack = this.props.playlistStore.tagsByTrack;
    const playlistsById = this.props.playlistStore.playlistsById;

    return (
      <React.Fragment>
        <input
          value={this.props.playlistStore.searchState.query}
          onChange={e => {
            this.props.playlistStore.searchState.query = e.target.value;
          }}
        />
        <div style={{ display: "flex" }}>
          <div
            style={{
              position: "relative",
              width: this.props.uiStore.state.trackColWidth
            }}
          >
            Title
            <ResizeHandle
              onResize={delta =>
                (this.props.uiStore.state.trackColWidth += delta)
              }
              style={{
                position: "absolute",
                right: 0,
                width: 5,
                top: 0,
                height: "100%",
                background: "gray"
              }}
            />
          </div>
          <div
            style={{
              position: "relative",
              width: this.props.uiStore.state.artistColWidth
            }}
          >
            Artist
            <ResizeHandle
              onResize={delta =>
                (this.props.uiStore.state.artistColWidth += delta)
              }
              style={{
                position: "absolute",
                right: 0,
                width: 5,
                top: 0,
                height: "100%",
                background: "gray"
              }}
            />
          </div>
          <div>Tags</div>
        </div>
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
              playlistId => this.tagSelectOptionsMap[playlistId]
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
                  tagOptions={this.tagSelectOptions}
                  trackColWidth={this.props.uiStore.state.trackColWidth}
                  artistColWidth={this.props.uiStore.state.artistColWidth}
                  addTag={this.props.playlistStore.addTag}
                  removeTag={this.props.playlistStore.removeTag}
                  createTagWithTrack={
                    this.props.playlistStore.createTagWithTrack
                  }
                />
              </div>
            );
          }}
        />
      </React.Fragment>
    );
  }

  get tagSelectOptions() {
    return _.map(this.props.playlistStore.playlistsById, (p, id) => ({
      label: p.name,
      value: id,
      color: randomMC.getColor({ text: id })
    }));
  }

  get tagSelectOptionsMap() {
    return _.keyBy(this.tagSelectOptions, "value");
  }
}
decorate(Table, {
  tagSelectOptions: computed,
  tagSelectOptionsMap: computed
});

export default observer(Table);
