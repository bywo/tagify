import React from "react";
import theme from "../theme";
import CollectionListItem from "./CollectionListItem";

export default function Sidebar({
  playlists,
  selectedPlaylist,
  onSelectPlaylist,
  style,
}) {
  return (
    <div
      style={{
        background: theme.colors.background,
        color: theme.colors.darkTextHighEmphasis,
        padding: `${theme.spacing.l}px 0`,
        ...style,
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
  );
}
