import React from "react";
import xs from "xstream";
import ResizeHandle from "./ResizeHandle";

import { componentFromStream } from "../util/recompose";
import * as ui from "../data/UIStore";

export default componentFromStream(() =>
  xs
    .combine(ui.trackColWidth$, ui.artistColWidth$)
    .map(([trackColWidth, artistColWidth]) => (
      <div style={{ display: "flex" }}>
        <div
          style={{
            position: "relative",
            width: trackColWidth,
          }}
        >
          Title
          <ResizeHandle
            onResize={ui.onResizeTrackCol}
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
            width: artistColWidth,
          }}
        >
          Artist
          <ResizeHandle
            onResize={ui.onResizeArtistCol}
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
    )),
);
