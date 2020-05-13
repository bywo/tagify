import React from "react";
import xs from "xstream";
import ResizeHandle from "./ResizeHandle";
import TrackList from "./TrackList";
import Header from "./Header";
import Sidebar from "./Sidebar";
import theme from "../theme";

import { componentFromStream } from "../util/recompose";
import * as playlist from "../data/PlaylistStore";
import * as ui from "../data/UIStore";
import * as user from "../data/UserStore";
import TrackDetail from "./TrackDetail";
import LoadingScreen from "./LoadingScreen";
import Player from "./Player";

if (global.window) {
  window.playlist = playlist;
  window.ui = ui;
}

export default componentFromStream(() =>
  xs
    .combine(
      playlist.isPerformingInitialFetches$,
      playlist.errorList$,
      ui.isSearchingByTags$,
      ui.focusedTrack$,
      user.token$,

      // NOTE: we need to subscribe. otherwise, the values won't get calculated
      playlist.filteredTracks$.startWith(undefined),
    )
    .map(
      ([
        isPerformingInitialFetches,
        errorList,
        isSearchingByTags,
        focusedTrack,
        token,
      ]) => (
        <div
          key="mainApp"
          style={{
            height: "100vh",
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
          }}
        >
          {isPerformingInitialFetches ? (
            <LoadingScreen />
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
              <div
                style={{
                  flexGrow: 1,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <TrackList
                  style={{
                    flexGrow: 1,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 0,
                  }}
                />
                {focusedTrack != undefined ? (
                  <TrackDetail
                    trackId={focusedTrack}
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      zIndex: 0,
                    }}
                  />
                ) : null}
              </div>
              <Player token={token} />
            </div>
          )}
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
      ),
    ),
);

// const blah = (
//   <div
//     style={{
//       display: "flex",
//       alignItems: "stretch",
//       flexGrow: 1,
//       flexBasis: 0,
//       flexShrink: 1,
//       overflow: "hidden",
//     }}
//   >
//     <div
//       style={{
//         display: "flex",
//         alignItems: "stretch",
//         width: sidebarWidth,
//         flexShrink: "0",
//         position: "relative",
//       }}
//     >
//       <Sidebar
//         style={{ flexGrow: "1", overflow: "auto" }}
//         playlists={playlists}
//         selectedPlaylist={selectedPlaylist}
//         onSelectPlaylist={ui.onSelectPlaylist}
//       />
//       <ResizeHandle
//         onResize={ui.onResizeSidebar}
//         style={{
//           position: "absolute",
//           right: -5,
//           width: 5,
//           top: 0,
//           height: "100%",
//         }}
//       />
//     </div>
//     {isPerformingInitialFetches ? (
//       <img src="/static/loading.svg" />
//     ) : (
//       <MainPane
//         style={{
//           flexGrow: 1,
//         }}
//       />
//     )}
//   </div>
// );
