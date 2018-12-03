import React from "react";
import xs from "xstream";
import ResizeHandle from "./ResizeHandle";
import MainPane from "./MainPane";
import Header from "./Header";
import Sidebar from "./Sidebar";
import theme from "../theme";

import { componentFromStream } from "../util/recompose";
import * as playlist from "../data/PlaylistStore";
import * as ui from "../data/UIStore";

if (global.window) {
  window.playlist = playlist;
}

export default componentFromStream(() =>
  xs
    .combine(ui.sidebarWidth$, playlist.playlists$, ui.selectedPlaylist$)
    .map(([sidebarWidth, playlists, selectedPlaylist]) => (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            flexGrow: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              width: sidebarWidth,
              flexShrink: "0",
              position: "relative",
            }}
          >
            <Sidebar
              style={{ flexGrow: "1", overflow: "auto" }}
              playlists={playlists}
              selectedPlaylist={selectedPlaylist}
              onSelectPlaylist={ui.onSelectPlaylist}
            />
            <ResizeHandle
              onResize={ui.onResizeSidebar}
              style={{
                position: "absolute",
                right: -5,
                width: 5,
                top: 0,
                height: "100%",
              }}
            />
          </div>
          <MainPane
            style={{
              flexGrow: 1,
            }}
          />
        </div>
      </div>
    )),
);
