import React from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import { decorate, computed } from "mobx";
import randomMC from "random-material-color";
import _ from "lodash";

// import Table from "./VirtualizedTable";
import Table from "./BasicTable";
import ResizeHandle from "./ResizeHandle";

class MainPane extends React.Component {
  static propTypes = {
    playlistStore: PropTypes.shape({}).isRequired,
    uiStore: PropTypes.shape({}).isRequired,
  };

  get tagSelectOptions() {
    const { playlistStore } = this.props;
    return _.map(playlistStore.playlistsById, (p, id) => ({
      label: p.name,
      value: id,
      color: randomMC.getColor({ text: id }),
    }));
  }

  get tagSelectOptionsMap() {
    return _.keyBy(this.tagSelectOptions, "value");
  }

  render() {
    const { uiStore, playlistStore } = this.props;
    return (
      <React.Fragment>
        <input
          value={playlistStore.searchState.query}
          onChange={e => {
            playlistStore.searchState.query = e.target.value;
          }}
        />
        <div style={{ display: "flex" }}>
          <div
            style={{
              position: "relative",
              width: uiStore.state.trackColWidth,
            }}
          >
            Title
            <ResizeHandle
              onResize={delta => {
                uiStore.state.trackColWidth += delta;
              }}
              style={{
                position: "absolute",
                right: 0,
                width: 5,
                top: 0,
                height: "100%",
                background: "gray",
              }}
            />
          </div>
          <div
            style={{
              position: "relative",
              width: uiStore.state.artistColWidth,
            }}
          >
            Artist
            <ResizeHandle
              onResize={delta => {
                uiStore.state.artistColWidth += delta;
              }}
              style={{
                position: "absolute",
                right: 0,
                width: 5,
                top: 0,
                height: "100%",
                background: "gray",
              }}
            />
          </div>
          <div>Tags</div>
        </div>
        {playlistStore.searchState.numFetches ? (
          <div>
            Loading...
            {playlistStore.searchState.numFetches}
          </div>
        ) : (
          <Table
            uiStore={uiStore}
            playlistStore={playlistStore}
            tagSelectOptions={this.tagSelectOptions}
            tagSelectOptionsMap={this.tagSelectOptionsMap}
          />
        )}
      </React.Fragment>
    );
  }
}

decorate(MainPane, {
  tagSelectOptions: computed,
  tagSelectOptionsMap: computed,
});

export default observer(MainPane);
