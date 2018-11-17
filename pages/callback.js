import Router from "next/router";
import * as token from "../util/token";

export default class SpotifyAuth extends React.Component {
  componentDidMount() {
    const matches = /access_token=([^&]+)(&|$)/.exec(window.location.hash);
    console.log("got matches", matches);
    if (matches) {
      token.set(matches[1]);
      console.log("aobut to replace");
      Router.push("/");
    }
  }

  render() {
    return <div>callback</div>;
  }
}
