import { componentFromStreamWithConfig } from "recompose";

const rxjs = require("rxjs");

export default componentFromStreamWithConfig({
  fromESObservable: rxjs.from,
  toESObservable: function toESObservable(stream) {
    return stream;
  },
});
