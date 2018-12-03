import React from "react";

import { componentFromStream } from "../util/recompose";
import * as ui from "../data/UIStore";
import theme from "../theme";

export default componentFromStream(() =>
  ui.searchQuery$.map(searchQuery => (
    <div
      style={{
        background: theme.colors.backgroundLighter,
        padding: `${theme.spacing.l}px ${theme.spacing.m}px`,
      }}
    >
      <span style={{ color: theme.colors.darkTextMedEmphasis }}>
        Filter by title or artist:{" "}
      </span>
      <input
        value={searchQuery}
        onChange={e => {
          ui.onChangeSearchQuery(e.target.value);
        }}
      />
    </div>
  )),
);
