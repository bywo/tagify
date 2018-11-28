import React from "react";
import xs from "xstream";
import CollectionListItem from "./CollectionListItem";
import ResizeHandle from "./ResizeHandle";
import MainPane from "./MainPane";
import Header from "./Header";

import { componentFromStream, createEventHandler } from "../util/recompose";
import * as playlist from "../data/PlaylistStore";
import * as ui from "../data/UIStore";

if (global.window) {
  window.playlist = playlist;
}

export default componentFromStream(() => {
  const {
    handler: onSidebarResize,
    stream: sidebarDeltasInput$,
  } = createEventHandler();
  ui.sidebarDeltas$.imitate(sidebarDeltasInput$);

  const {
    handler: onSelectPlaylist,
    stream: selectedPlaylistInput$,
  } = createEventHandler();
  ui.selectedPlaylistChanges$.imitate(selectedPlaylistInput$);

  return xs
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
            <div
              style={{
                flexGrow: "1",
                overflow: "auto",
              }}
            >
              {[{ id: "all", name: "All songs" }, ...playlists].map(p => (
                <CollectionListItem
                  key={p.id}
                  selected={p.id === selectedPlaylist}
                  onClick={() => {
                    onSelectPlaylist(p.id);
                  }}
                  name={p.name}
                />
              ))}
            </div>
            <ResizeHandle
              onResize={onSidebarResize}
              style={{
                position: "absolute",
                right: -5,
                width: 5,
                top: 0,
                height: "100%",
                background: "gray",
              }}
            />
          </div>
          <div
            style={{
              overflow: "auto",
              paddingLeft: 20,
              flexGrow: 1,
            }}
          >
            <MainPane />
          </div>
        </div>
      </div>
    ));
});
