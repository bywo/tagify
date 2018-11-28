import React from "react";
import PropTypes from "prop-types";
import xs from "xstream";

import { componentFromStream, createEventHandler } from "../util/recompose";
import * as playlist from "../data/PlaylistStore";
import * as ui from "../data/UIStore";

export default componentFromStream(() => {
  const {
    handler: onChangeSearchQuery,
    stream: searchQueryChangesInput$,
  } = createEventHandler();
  ui.searchQueryChanges$.imitate(searchQueryChangesInput$);

  return ui.searchQuery$.map(searchQuery => (
    <input
      value={searchQuery}
      onChange={e => {
        onChangeSearchQuery(e.target.value);
      }}
    />
  ));
});
