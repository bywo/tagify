import React from "react";
import xs from "xstream";
import CollectionListItem from "./CollectionListItem";
import ResizeHandle from "./ResizeHandle";
import MainPane from "./MainPane";

import { componentFromStream, createEventHandler } from "../util/recompose";
import * as playlist from "../data/PlaylistStore";
import * as ui from "../data/UIStore";

export default componentFromStream(() => {
  console.log("App componentFromStream");
  const {
    handler: onSidebarResize,
    stream: sidebarStream,
  } = createEventHandler();
  ui.sidebarDeltas$.imitate(sidebarStream);

  return xs
    .combine(ui.sidebarWidth$, playlist.playlists$)
    .map(([sidebarWidth, playlists]) => (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>header</div>
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
                  // selected={
                  //   p.id === this.playlistStore.searchState.selectedPlaylistId
                  // }
                  onClick={() => {
                    this.playlistStore.searchState.selectedPlaylistId = p.id;
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
            {/* <MainPane /> */}
          </div>
        </div>
      </div>
    ));
});
