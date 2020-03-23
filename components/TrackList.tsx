import React from "react";
import PropTypes from "prop-types";
import xs, { MemoryStream } from "xstream";
const randomMC = require("random-material-color");
import _ from "lodash";
import ArrowBack from "@material-ui/icons/ArrowBack";
import FilterList from "@material-ui/icons/FilterList";

import { componentFromStream } from "../util/recompose";
import * as playlist from "../data/PlaylistStore";
import * as ui from "../data/UIStore";
import theme from "../theme";

import Table from "./VirtualizedTable";
import useXstream from "../hooks/useXstream";
import Tag from "./Tag";
// import Table from "./BasicTable";

export default function TrackList(props: { style?: React.CSSProperties }) {
  const filteredTracks = useXstream(playlist.filteredTracks$, []);
  const playlists = useXstream(playlist.playlists$ as MemoryStream<any[]>, []);
  const tagsByTrack = useXstream(playlist.tagsByTrack$, {});
  const tracksById = useXstream(playlist.tracksById$, {});
  const tagQuery = useXstream(ui.tagQuery$, []);
  const tagsById = useXstream(playlist.tagsById$);

  const tagSelectOptions = playlists.map(p => ({
    label: p.name,
    value: p.id,
    color: randomMC.getColor({ text: p.id }),
  }));
  const tagSelectOptionsMap = _.keyBy(tagSelectOptions, "value");
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
          display: "flex",
          borderBottom: "solid 1px #bbb",
          alignItems: "center",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          {tagQuery.length === 0 ? (
            <div style={{ fontWeight: 600, fontSize: "16px", padding: 12 }}>
              All songs
            </div>
          ) : (
            <div
              style={{
                padding: 12,
                fontWeight: 600,
                fontSize: "14px",
                marginBottom: -3,
              }}
            >
              <div style={{ marginBottom: 3 }}>Tracks tagged with:</div>
              {tagQuery.map(id => (
                <Tag
                  id={id}
                  key={id}
                  name={tagsById[id] ? tagsById[id].name : "..."}
                  style={{ margin: "0 3px 3px 0" }}
                />
              ))}
            </div>
          )}
        </div>
        <div
          style={{ padding: 12, lineHeight: 0, cursor: "pointer" }}
          onClick={() => ui.setIsSearchingByTags(true)}
        >
          <FilterList />
        </div>
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
