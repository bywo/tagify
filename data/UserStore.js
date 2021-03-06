import xs from "xstream";
import dropRepeats from "xstream/extra/dropRepeats";
import db from "./db";
import { createEventHandler } from "../util/recompose";

const { handler: onToken, stream: tokenSets$ } = createEventHandler();
export { onToken };
tokenSets$.addListener({
  next(token) {
    console.log("after token set", token);
    db.misc.put(token, "token");
  },
});

// race tokenSets and db.get against each other and take the winner.
// handles race condition where token is empty at boot, but gets set right on load
const tokenFromDb$ = xs
  .merge(tokenSets$, xs.fromPromise(db.misc.get("token")))
  .take(1);

export const token$ = xs
  .merge(tokenFromDb$, tokenSets$)
  .compose(dropRepeats())
  .remember();

// TODO: Subject that works when we subscribe late
export const fetch$ = token$
  .filter(token => token != null)
  .map(token => {
    async function f(url, options = {}) {
      options.headers = options.headers || {};
      options.headers.Authorization = `Bearer ${token}`;
      const resp = await fetch(url, options);
      if (resp.status === 429) {
        const retryAfter = resp.headers.get("retry-after") || "1";
        console.log("rate limited, retrying in", retryAfter);
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(f(url, options));
          }, parseInt(retryAfter, 10) * 1000);
        });
      }
      if (resp.status === 401) {
        // bad token
        tokenSets$.shamefullySendNext(null);
      }
      return resp;
    }

    return f;
  })
  .remember();

export const user$ = fetch$
  .filter(f => !!f)
  .map(async fetch => {
    const resp = await fetch("https://api.spotify.com/v1/me");
    const data = await resp.json();
    return data;
  })
  .map(xs.fromPromise)
  .flatten()
  .remember();
