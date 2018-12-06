import React from "react";
import Login from "../components/Login";
import App from "../components/App";
import { token$ } from "../data/UserStore";
import { componentFromStream } from "../util/recompose";

export default componentFromStream(() =>
  token$.map(token => (token ? <App /> : <Login />)),
);
