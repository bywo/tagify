import React from "react";
import xs, { Stream, MemoryStream } from "xstream";

import { componentFromStream } from "../util/recompose";
import * as ui from "../data/UIStore";
import theme from "../theme";
import { Subscribable } from "recompose";
import useXstream from "../hooks/useXstream";
import { tags$ } from "../data/PlaylistStore";
import * as _ from "lodash";
import Tag from "./Tag";

export default function SearchBar(props: any) {
  const query = useXstream(ui.tagQuery$);
  const tags = useXstream(tags$ as MemoryStream<any[]>);

  if (!query) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        padding: `${theme.spacing.l}px ${theme.spacing.m}px`,
        ...props.style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          flexGrow: 1,
          background: "#FFFFFF",
          border: "2px solid #7D7D7D",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.46)",
          borderRadius: theme.borderRadius.m,
          padding: `${theme.spacing.s}px ${theme.spacing.m}px`,
        }}
      >
        {query.map(id => {
          const playlist = _.find(tags, { id });
          return <Tag name={playlist.name} id={id} />;
        })}
        <input
          value={""}
          onChange={e => {
            ui.onChangeSearchText(e.target.value);
          }}
          placeholder="Filter by title or artist"
          style={{
            outline: "none",
            padding: 0,
            border: "none",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: theme.fontSizes.l,
          }}
        />
      </div>
    </div>
  );
}
