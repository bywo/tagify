import "core-js/modules/es7.symbol.observable";

import Router from "next/router";
import * as token from "../util/token";
import as from "../util/as";
import { setToken } from "../data/UserStore";

export default class SpotifyAuth extends React.Component {
  componentDidMount() {
    const matches = /access_token=([^&]+)(&|$)/.exec(window.location.hash);
    console.log("got matches", matches);
    if (matches) {
      // token.set(matches[1]);
      setToken(matches[1]);
      const path = "/";
      Router.push(path, as(path));
    }
  }

  render() {
    return <div>callback</div>;
  }
}
