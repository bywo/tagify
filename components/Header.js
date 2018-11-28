import React from "react";

import { componentFromStream } from "../util/recompose";
import * as user from "../data/UserStore";

export default componentFromStream(() =>
  user.user$.map(u => <div>Tagify Welcome, {u.display_name}</div>),
);
