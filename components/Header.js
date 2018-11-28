import React from "react";
import xs from "xstream";

import { componentFromStream, createEventHandler } from "../util/recompose";
import * as user from "../data/UserStore";

export default componentFromStream(() =>
  user.user$.map(user => {
    console.log("got user", user);
    return <div>
Tagify Welcome,
{' '}
{user.display_name}
</div>;
  }),
);
