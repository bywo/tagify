import React, { useEffect } from "react";
import Login from "../components/Login";
import App from "../components/App";
import { token$ } from "../data/UserStore";
import useXstream from "../hooks/useXstream";
import * as user from "../data/UserStore";
import * as playlist from "../data/PlaylistStore";

export default function Index() {
  // NOTE: need to subscribe to this so data flows through. xstream is lazy
  useXstream(playlist.tracksById$);

  const token = useXstream(token$, "unknown");

  useEffect(() => {
    const matches = /access_token=([^&]+)(&|$)/.exec(window.location.hash);
    if (matches) {
      user.onToken(matches[1]);
    }
  }, []);

  if (token === "unknown") {
    return null;
  }

  return token ? <App /> : <Login />;
}
