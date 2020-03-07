import React from "react";
import theme from "../theme";

import { componentFromStream } from "../util/recompose";
import * as user from "../data/UserStore";
import Player from "./Player";
import useXstream from "../hooks/useXstream";

export default function Header() {
  const u = useXstream(user.user$, {});
  const token = useXstream(user.token$);

  return (
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
      <Player token={token} />
      <div style={{ flexGrow: "1" }} />
      <div style={{ fontSize: theme.fontSizes.m }}>{u.display_name}</div>
    </div>
  );
}
