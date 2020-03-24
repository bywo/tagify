import React, { useMemo, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import xs, { MemoryStream } from "xstream";
const randomMC = require("random-material-color");
import _ from "lodash";
import ArrowBack from "@material-ui/icons/ArrowBack";
import FilterList from "@material-ui/icons/FilterList";
import Add from "@material-ui/icons/Add";

import { componentFromStream } from "../util/recompose";
import * as playlist from "../data/PlaylistStore";
import * as ui from "../data/UIStore";
import theme from "../theme";

import Table from "./VirtualizedTable";
import useXstream from "../hooks/useXstream";
import Tag from "./Tag";
import SearchInput from "./SearchInput";
import Row from "./Row";
// import Table from "./BasicTable";

export default function TrackList(props: { style?: React.CSSProperties }) {
  const filteredTracks = useXstream(playlist.filteredTracks$, []);
  const playlists = useXstream(playlist.playlists$ as MemoryStream<any[]>, []);
  const tagsByTrack = useXstream(playlist.tagsByTrack$, {});
  const tracksById = useXstream(playlist.tracksById$, {});
  const tagQuery = useXstream(ui.tagQuery$, []);
  const tagsById = useXstream(playlist.tagsById$);
  const tagSearchText = useXstream(ui.tagSearchText$, "");
  const isSearchingByTags = useXstream(ui.isSearchingByTags$, false);

  const tagSelectOptions = playlists.map(p => ({
    label: p.name,
    value: p.id,
    color: randomMC.getColor({ text: p.id }),
  }));
  const tagSelectOptionsMap = _.keyBy(tagSelectOptions, "value");

  const tags = useXstream(
    playlist.tagsWithNumOverlapping$ as MemoryStream<any[]>,
    [],
  );
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

  const tagSearchResultsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (tagSearchResultsRef.current) {
      tagSearchResultsRef.current.scrollTo({ top: 0 });
    }
  }, [tagQuery.length]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        ...props.style,
      }}
    >
      {/* <SearchBar style={{ position: "absolute", top: 0, zIndex: 2 }} /> */}
      {/* <TableHeader /> */}
      <div
        style={{
          borderBottom: "solid 1px #bbb",
          padding: 12,
        }}
      >
        <div style={{ fontWeight: 800, fontSize: "24px", marginBottom: 3 }}>
          {tagQuery.length === 0 ? "Tracks" : "Tracks matching"}
        </div>
        <div
          style={{ position: "relative", outline: "none" }}
          // tabIndex={-1}
        >
          <SearchInput
            value={tagSearchText}
            placeholder="Filter by tag(s)..."
            onChange={ui.onChangeTagSearchText}
            style={{
              paddingBottom: 3,
              flexGrow: 1,
              position: "relative",
              zIndex: 4,
            }}
            inputStyle={{ marginBottom: 3 }}
            onFocus={() => ui.setIsSearchingByTags(true)}
            onBlur={() => {
              ui.setIsSearchingByTags(false);
            }}
          >
            {tagQuery.map(id => (
              <Tag
                id={id}
                key={id}
                style={{ marginRight: 3, marginBottom: 3 }}
                name={tagsById[id] ? tagsById[id].name : "..."}
                onMouseDown={e => {
                  e.preventDefault();
                }}
                onClick={e => {
                  e.stopPropagation();
                  ui.onRemoveTagFromQuery(id);
                }}
                icon="close"
              />
            ))}
          </SearchInput>
          {isSearchingByTags && (
            <div
              ref={tagSearchResultsRef}
              style={{
                position: "absolute",
                top: 0,
                width: "100%",
                zIndex: 2,
                background: "rgba(255, 255, 255, 0.93)",
                maxHeight: "calc(100vh - 50px)",
                overflow: "auto",
                border: "solid 1px #ccc",
                borderRadius: 6,
                paddingTop: 34,
              }}
            >
              {sorted.map(t => (
                <Row
                  key={t.tag.id}
                  onMouseDown={e => {
                    e.preventDefault();
                  }}
                  onClick={e => {
                    ui.onAddTagToQuery(t.tag.id);
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
            </div>
          )}
        </div>
        {/* <div
          style={{ padding: 12, lineHeight: 0, cursor: "pointer" }}
          onClick={() => ui.setIsSearchingByTags(true)}
        >
          <FilterList />
        </div> */}
      </div>
      <Table
        style={{ flexGrow: 1, flexBasis: 0 }}
        tagQuery={tagQuery}
        filteredTracks={filteredTracks}
        tagsByTrack={tagsByTrack}
        tracksById={tracksById}
        tagSelectOptions={tagSelectOptions}
        tagSelectOptionsMap={tagSelectOptionsMap}
        addTag={(trackId, playlistId) =>
          playlist.addTag({ trackId, playlistId })
        }
        removeTag={(trackId, playlistId) =>
          playlist.removeTag({ trackId, playlistId })
        }
        createAndAddTag={(trackId, playlistName) =>
          playlist.createAndAddTag({ trackId, playlistName })
        }
        onClickTrack={trackId => ui.onChangeFocusedTrack(trackId)}
      />
    </div>
  );
}
