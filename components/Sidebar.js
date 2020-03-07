import React from "react";
import theme from "../theme";
import CollectionListItem from "./CollectionListItem";
import Link from "next/link";

export default function Sidebar({ playlists, selectedPlaylist, style }) {
  return (
    <div
      style={{
        background: theme.colors.background,
        color: theme.colors.darkTextHighEmphasis,
        padding: `${theme.spacing.l}px 0`,
        wordWrap: "break-word",
        ...style,
      }}
    >
      {[{ id: "all", name: "All songs" }, ...playlists].map(p => (
        <Link href="/list/[id]" as={`/list/${p.id}`}>
          <CollectionListItem
            key={p.id}
            selected={p.id === selectedPlaylist}
            name={p.name}
          />
        </Link>
      ))}
    </div>
  );
}
