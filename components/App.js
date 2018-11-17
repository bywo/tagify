import { observer } from "mobx-react";
import { reaction } from "mobx";
import PlaylistStore from "../data/PlaylistStore";
import Tag from "../components/Tag";
import CollectionListItem from "./CollectionListItem";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache
} from "react-virtualized";
import UIStore from "../data/UIStore";
import ResizeHandle from "./ResizeHandle";
import Select from "react-select";
import Table from "./Table";

export default observer(
  class App extends React.Component {
    constructor(props) {
      super(props);

      this.playlistStore = new PlaylistStore();
      window.playlistStore = this.playlistStore;

      this.uiStore = new UIStore();
      window.uiStore = this.uiStore;
    }

    render() {
      return (
        <div style={{ height: "100vh", flexDirection: "column" }}>
          <div>header</div>
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              flexGrow: 1
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "stretch",
                width: this.uiStore.state.sidebarWidth,
                position: "relative"
              }}
            >
              <div
                style={{
                  flexGrow: "1",
                  overflow: "auto"
                }}
              >
                {[
                  { id: "all", name: "All songs" },
                  ...this.playlistStore.playlists
                ].map(p => {
                  return (
                    <CollectionListItem
                      key={p.id}
                      selected={
                        p.id ===
                        this.playlistStore.searchState.selectedPlaylistId
                      }
                      onClick={() =>
                        (this.playlistStore.searchState.selectedPlaylistId =
                          p.id)
                      }
                      name={p.name}
                    />
                  );
                })}
              </div>
              <ResizeHandle
                onResize={delta => {
                  this.uiStore.state.sidebarWidth =
                    this.uiStore.state.sidebarWidth + delta;
                }}
                style={{
                  position: "absolute",
                  right: -5,
                  width: 5,
                  top: 0,
                  height: "100vh",
                  background: "gray"
                }}
              />
            </div>
            <div
              style={{
                overflow: "auto",
                paddingLeft: this.uiStore.state.panelGutter
              }}
            >
              <Table
                uiStore={this.uiStore}
                playlistStore={this.playlistStore}
              />
            </div>
          </div>
        </div>
      );
    }
  }
);
