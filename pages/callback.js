import "core-js/modules/es7.symbol.observable";

import React from "react";
import Router from "next/router";
import as from "../util/as";

import * as user from "../data/UserStore";
import "../data/PlaylistStore";

export default class SpotifyAuth extends React.Component {
  componentDidMount() {
    const matches = /access_token=([^&]+)(&|$)/.exec(window.location.hash);
    if (matches) {
      user.onToken(matches[1]);
      const path = "/";
      Router.push(path, as(path));
    }
  }

  render() {
    return <div>callback</div>;
  }
}
