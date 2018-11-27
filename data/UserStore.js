import * as rxjs from "rxjs";
import { filter, map, distinctUntilChanged } from "rxjs/operators";
import db from "./db";

const tokenFromDb$ = new rxjs.BehaviorSubject();
db.misc.get("token").then(result => {
  console.log("read from db");
  tokenFromDb$.next(result || null);
});

const tokenSets$ = new rxjs.BehaviorSubject();
export function setToken(token) {
  console.log("heyo setToken", token);
  tokenSets$.next(token);
  db.misc.put(token, "token");
}

export const token$ = new rxjs.Subject();
rxjs
  .combineLatest(tokenFromDb$, tokenSets$, (fromDb, fromSet) => {
    console.log("combineLatest", fromDb, fromSet);
    return fromSet !== undefined ? fromSet : fromDb;
  })
  .pipe(distinctUntilChanged())
  .subscribe(token$);

token$.subscribe(val => {
  console.log("token", val);
});

// TODO: Subject that works when we subscribe late
export const fetch$ = new rxjs.BehaviorSubject();
token$
  .pipe(
    filter(token => token != null),
    map(token => {
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
          setToken(null);
        }
        return resp;
      }

      return f;
    }),
  )
  .subscribe(fetch$);

fetch$.subscribe(f => {
  console.log("new fetch!", f);
});

export const user$ = fetch$.pipe(
  filter(f => !!f),
  map(async fetch => {
    const resp = await fetch("https://api.spotify.com/v1/me");
    const data = await resp.json();
    return data;
  }),
);
