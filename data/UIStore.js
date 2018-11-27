import _ from "lodash";

import xs from "xstream";

export const sidebarDeltas$ = xs.create();
export const sidebarWidth$ = sidebarDeltas$.fold((acc, x) => acc + x, 200);

export const trackColWidth$ = xs.of(200);
export const artistColWidth$ = xs.of(200);
