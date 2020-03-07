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
    .combine(
      ui.sidebarWidth$,
      playlist.playlists$,
      ui.selectedPlaylist$,
      playlist.errorList$,
    )
    .map(([sidebarWidth, playlists, selectedPlaylist, errorList]) => (
      <div
        key="mainApp"
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
            flexBasis: 0,
            flexShrink: 1,
            overflow: "hidden",
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
        <div
          style={{
            position: "fixed",
            bottom: theme.spacing.l,
            right: theme.spacing.l,
          }}
        >
          {errorList.map((err, i) => (
            <div
              key={i}
              onClick={() => playlist.dismissError(err)}
              style={{
                background: theme.colors.danger,
                color: theme.colors.lightTextHighEmphasis,
                fontSize: theme.fontSizes.m,
                padding: theme.spacing.m,
                borderRadius: theme.borderRadius.s,
                cursor: "pointer",
                marginTop: theme.spacing.m,
              }}
            >
              {err.message}
            </div>
          ))}
        </div>
      </div>
    )),
);
