import React from "react";
import theme from "../theme";

import { componentFromStream } from "../util/recompose";
import * as user from "../data/UserStore";

export default componentFromStream(() =>
  user.user$.startWith({}).map(u => (
    <div
      style={{
        background: theme.colors.primary,
        color: theme.colors.lightTextHighEmphasis,
        padding: theme.spacing.l,
        display: "flex",
        alignItems: "baseline",
        flexShrink: 0,
      }}
    >
      <div style={{ fontSize: theme.fontSizes.l }}>Tagify</div>
      <div style={{ flexGrow: "1" }} />
      <div style={{ fontSize: theme.fontSizes.m }}>{u.display_name}</div>
    </div>
  )),
);
