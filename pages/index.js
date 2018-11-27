import "core-js/modules/es7.symbol.observable";

import React from "react";
import { map } from "rxjs/operators";
import Login from "../components/Login";
import App from "../components/App";
import { token$ } from "../data/UserStore";
import componentFromStream from "../util/componentFromStream";

export default componentFromStream(() =>
  token$.pipe(map(token => (token ? <App /> : <Login />))),
);
