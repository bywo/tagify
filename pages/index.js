import React, { useEffect } from "react";
import Login from "../components/Login";
import App from "../components/App";
import { token$ } from "../data/UserStore";
import { setIsSearchingByTags } from "../data/UIStore";
import useXstream from "../hooks/useXstream";

export default function Index({ query }) {
  const token = useXstream(token$, "unknown");

  if (token === "unknown") {
    return null;
  }

  return token ? <App /> : <Login />;
}

Index.getInitialProps = ({ query }) => ({ query });
