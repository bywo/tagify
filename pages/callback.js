import "core-js/modules/es7.symbol.observable";

import Router from "next/router";
import xs from "xstream";
import as from "../util/as";

import { componentFromStream, createEventHandler } from "../util/recompose";
import { tokenSets$ } from "../data/UserStore";

class SpotifyAuth extends React.Component {
  componentDidMount() {
    const matches = /access_token=([^&]+)(&|$)/.exec(window.location.hash);
    console.log("got matches", matches);
    if (matches) {
      // token.set(matches[1]);
      this.props.onToken(matches[1]);
      const path = "/";
      Router.push(path, as(path));
    }
  }

  render() {
    return <div>callback</div>;
  }
}

export default componentFromStream(() => {
  const { handler, stream } = createEventHandler();

  tokenSets$.imitate(stream);

  return xs.of(<SpotifyAuth onToken={handler} />);
});
