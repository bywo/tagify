import React from "react";
import PropTypes from "prop-types";
import xs from "xstream";
import randomMC from "random-material-color";
import _ from "lodash";

import { componentFromStream, createEventHandler } from "../util/recompose";
import * as playlist from "../data/PlaylistStore";
import * as ui from "../data/UIStore";

// import Table from "./VirtualizedTable";
import Table from "./BasicTable";
import SearchBar from "./SearchBar";
import TableHeader from "./TableHeader";

export default componentFromStream(() => {
  const tagSelectOptions$ = playlist.playlists$
    .map(playlists =>
      playlists.map(p => ({
        label: p.name,
        value: p.id,
        color: randomMC.getColor({ text: p.id }),
      })),
    )
    .remember();
  const tagSelectOptionsMap$ = tagSelectOptions$
    .map(options => _.keyBy(options, "value"))
    .remember();

  return xs
    .combine(
      playlist.filteredTracks$,
      playlist.tagsByTrack$,
      playlist.tracksById$,
      tagSelectOptions$,
      tagSelectOptionsMap$,
    )
    .map(
      ([
        filteredTracks,
        tagsByTrack,
        tracksById,
        tagSelectOptions,
        tagSelectOptionsMap,
      ]) => (
        <React.Fragment>
          <SearchBar />
          <TableHeader />
          <Table
            filteredTracks={filteredTracks}
            tagsByTrack={tagsByTrack}
            tracksById={tracksById}
            tagSelectOptions={tagSelectOptions}
            tagSelectOptionsMap={tagSelectOptionsMap}
          />
        </React.Fragment>
      ),
    );
});
