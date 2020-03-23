import React, { useMemo, useState } from "react";
import useXstream from "../hooks/useXstream";
import {
  tagQuery$,
  onAddTagToQuery,
  tagSearchText$,
  onRemoveTagFromQuery,
  setIsSearchingByTags,
  onChangeTagSearchText,
} from "../data/UIStore";
import {
  playlists$,
  tagsWithNumOverlapping$,
  tagsById$,
  allTracks$,
} from "../data/PlaylistStore";
import { MemoryStream } from "xstream";
import Tag from "../components/Tag";
import * as _ from "lodash";
import SearchInput from "./SearchInput";
import theme from "../theme";
import ArrowForward from "@material-ui/icons/ArrowForward";
import Add from "@material-ui/icons/Add";
import Row from "./Row";

export default function TagSearchScreen({
  style,
}: {
  style?: React.CSSProperties;
}) {
  const tagQuery = useXstream(tagQuery$, []);
  const tagSearchText = useXstream(tagSearchText$, "");
  const tags = useXstream(tagsWithNumOverlapping$ as MemoryStream<any[]>, []);
  const tagsById = useXstream(tagsById$);
  const allTracks = useXstream(allTracks$, []);

  const filtered = tagSearchText
    ? tags.filter(t =>
        t.tag.name
          .toLocaleLowerCase()
          .includes(tagSearchText.toLocaleLowerCase()),
      )
    : tags;

  const sorted = useMemo(
    () => _.orderBy(filtered, ["numOverlapping"], ["desc"]),
    [filtered],
  );

  if (!tagsById) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "white",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: theme.spacing.m,
          borderBottom: "solid 1px #bbb",
        }}
      >
        <div
          style={{
            flexGrow: 1,
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          <div style={{ marginBottom: 6 }}>Filter tracks by tags:</div>
          <SearchInput
            value={tagSearchText}
            placeholder="Enter tag name(s)..."
            onChange={onChangeTagSearchText}
            style={{ paddingBottom: 3, flexGrow: 1 }}
            inputStyle={{ marginBottom: 3 }}
          >
            {tagQuery.map(id => (
              <Tag
                id={id}
                key={id}
                style={{ marginRight: 3, marginBottom: 3 }}
                name={tagsById[id] ? tagsById[id].name : "..."}
                onClick={() => onRemoveTagFromQuery(id)}
                icon="close"
              />
            ))}
          </SearchInput>
        </div>
        <div
          style={{ lineHeight: 0, marginLeft: 12, cursor: "pointer" }}
          onClick={() => setIsSearchingByTags(false)}
        >
          <ArrowForward />
        </div>
      </div>
      <div style={{ flexGrow: 1, flexBasis: 0, overflow: "auto" }}>
        {tagQuery.length === 0 && !tagSearchText ? (
          <Row
            onClick={() => {
              setIsSearchingByTags(false);
            }}
            actionIcon={<ArrowForward />}
          >
            <span style={{ fontSize: "14px", fontWeight: 600 }}>All songs</span>
            <div
              style={{
                whiteSpace: "nowrap",
                fontWeight: 500,
                fontSize: "14px",
                marginTop: 3,
              }}
            >
              <span style={{ fontWeight: 600 }}>{allTracks.length}</span> tracks
            </div>
          </Row>
        ) : null}
        {sorted.map(t => (
          <Row
            key={t.tag.id}
            onClick={() => {
              onAddTagToQuery(t.tag.id);
            }}
            actionIcon={<Add />}
          >
            <Tag
              id={t.tag.id}
              name={t.tag.name}
              style={{ margin: "0 12px 0 0", maxWidth: "100%" }}
            />
            <div
              style={{
                whiteSpace: "nowrap",
                fontWeight: 500,
                fontSize: "14px",
                marginTop: 3,
              }}
            >
              <span style={{ fontWeight: 600 }}>{t.numOverlapping}</span>
              {tagQuery.length ? " overlapping" : ""} tracks
            </div>
          </Row>
        ))}
      </div>{" "}
    </div>
  );
}
