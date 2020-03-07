import { useEffect, useState, useRef } from "react";
import useScript from "react-script-hook";
import { createEventHandler } from "../util/recompose";
import xs, { Stream, MemoryStream } from "xstream";
import dropRepeats from "xstream/extra/dropRepeats";
import sampleCombine from "xstream/extra/sampleCombine";
import useXstream from "./useXstream";

type Player = any;

interface Artist {
  name: string;
  uri: string;
}

interface Track {
  id: string;
  uri: string;
  type: string;
  media_type: string;
  name: string;
  duration_ms: number;
  artists: Artist[];
  album: {
    name: string;
    uri: string;
    images: Array<{ url: string; height: number; width: number }>;
  };
  is_playable: boolean;
}

// white SdkPlayerState is null, take from ApiPlayerState
interface SdkPlayerState {
  context: {
    uri: string;
    metadata: {
      context_description: string;
    };
  };
  bitrate: number;
  position: number;
  duration: number;
  paused: boolean;
  shuffle: boolean;
  repeat_mode:
    | 0 // off
    | 1 // track
    | 2; // context
  track_window: {
    current_track: Track | null;
    next_tracks: Track[];
    previous_tracks: Track[];
  };
  timestamp: number;
}

interface ApiPlayerState {
  device: Device;
  repeat_state: RepeatState;
  shuffle_state: boolean;
  context: {
    uri: string;
    href: string;
    type: string;
  };
  timestamp: number;
  progress_ms: number;
  is_playing: boolean;
  item: Track | null;
  currently_playing_type: "track" | "episode" | "ad" | "unknown";
}

type RepeatState = "off" | "track" | "context";
interface PlayerState {
  device: Device;
  context: {
    uri: string;
  };
  repeat_state: RepeatState;
  shuffle_state: boolean;
  timestamp: number;
  progress_ms: number;
  is_playing: boolean;
  item: Track | null;
}

declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady?: () => void;
    Spotify: {
      Player: Player; // TODO: better types
    };
  }
}

const {
  handler: setSpotifySdkLoaded,
  stream: spotifySdkLoadedChanges$,
} = createEventHandler<boolean, Stream<boolean>>();
const spotifySdkLoaded$ = spotifySdkLoadedChanges$.startWith(false);
if (typeof window !== "undefined") {
  window.onSpotifyWebPlaybackSDKReady = () => {
    console.log("bw: setting loaded true");
    setSpotifySdkLoaded(true);
  };
}

const { handler: setToken, stream: tokenChanges$ } = createEventHandler<
  string,
  Stream<string>
>();
const token$ = tokenChanges$.compose(dropRepeats()).remember();

const {
  handler: setPlayerName,
  stream: playerNameChanges$,
} = createEventHandler<string, Stream<string>>();
const playerName$ = playerNameChanges$.compose(dropRepeats());

const player$ = xs
  .combine(spotifySdkLoaded$, token$, playerName$)
  .filter(([sdkLoaded, token, playerName]) => sdkLoaded)
  .map(([sdkLoaded, token, playerName]) => {
    const player = new window.Spotify.Player({
      name: playerName,
      getOAuthToken: (cb: (token: string) => void) => {
        cb(token);
      },
    });

    return {
      connection$: xs.fromPromise(player.connect()),
      playerState$: xs.createWithMemory<SdkPlayerState | undefined>({
        start: listener => {
          player.addListener(
            "player_state_changed",
            (state: SdkPlayerState) => {
              console.log(state);
              listener.next(state);
            },
          );
        },
        stop: () => {
          player.removeListener("player_state_changed");
        },
      }),
      ready$: xs.createWithMemory<boolean>({
        start: listener => {
          player.addListener("ready", ({ device_id }: any) => {
            listener.next(true);
          });

          // Not Ready
          player.addListener("not_ready", ({ device_id }: any) => {
            listener.next(false);
          });
        },
        stop: () => {
          player.removeListener("ready");
          player.removeListener("not_ready");
        },
      }),
      deviceId$: xs.createWithMemory<string>({
        start: listener => {
          player.addListener("ready", ({ device_id }: any) => {
            listener.next(device_id);
          });

          // Not Ready
          player.addListener("not_ready", ({ device_id }: any) => {
            listener.next(device_id);
          });
        },
        stop: () => {
          player.removeListener("ready");
          player.removeListener("not_ready");
        },
      }),
    };
  });

const ready$ = player$
  .map(({ ready$ }) => ready$)
  .flatten()
  .startWith(false);

const sdkPlayerState$ = player$
  .map(({ playerState$ }) => playerState$)
  .flatten()
  .startWith(undefined);

const deviceId$ = player$.map(({ deviceId$ }) => deviceId$).flatten();

interface Device {
  id: string;
  is_active: boolean;
  is_private_session: boolean;
  is_restricted: boolean;
  name: string;
  type: string;
  volume_percent: number;
}

const devices$: Stream<Device[]> = xs
  .combine(token$, ready$)
  .map(async ([token]) => {
    const resp = await fetch(`https://api.spotify.com/v1/me/player/devices`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!resp.ok) {
      throw new Error("Couldn't fetch devices.");
    }

    return (await resp.json()).devices;
  })
  .map(xs.fromPromise)
  .flatten();

function withoutUndefined<T>(s: Stream<T | undefined>): Stream<T> {
  return s.filter(t => t != undefined) as Stream<T>;
}

const thisDevice$ = withoutUndefined(
  xs.combine(deviceId$, devices$).map(([deviceId, devices]) => {
    return devices.find(d => d.id === deviceId);
  }),
);

const apiPlayerState$: Stream<ApiPlayerState | undefined> = sdkPlayerState$
  .map(playerState => {
    if (!playerState) {
      // our web sdk isn't currently playing music
      return xs
        .combine(
          token$,
          xs.periodic(3000).startWith(0),
          pauses$.startWith(),
          plays$.startWith(),
        )
        .map(async ([token]) => {
          const resp = await fetch(`https://api.spotify.com/v1/me/player`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (!resp.ok) {
            throw new Error("Couldn't fetch player state.");
          }

          if (resp.status === 204) {
            return undefined;
          }

          return resp.json();
        })
        .map(xs.fromPromise)
        .flatten();
    } else {
      return xs.empty();
    }
  })
  .flatten();

const repeatStateMap: Array<RepeatState> = ["off", "track", "context"];
const sdkPlayerStateDefined$ = withoutUndefined(sdkPlayerState$).remember();
const sdkPlayerStateMapped$: Stream<PlayerState> = xs
  .combine(sdkPlayerStateDefined$, thisDevice$)
  .map(([sdkPlayerState, device]) => ({
    device,
    context: {
      uri: sdkPlayerState?.context.uri,
    },
    repeat_state: repeatStateMap[sdkPlayerState.repeat_mode],
    shuffle_state: sdkPlayerState.shuffle,
    timestamp: sdkPlayerState.timestamp,
    progress_ms: sdkPlayerState.position,
    is_playing: !sdkPlayerState.paused,
    item: sdkPlayerState.track_window.current_track,
  }));

const playerState$: MemoryStream<PlayerState | undefined> = xs
  .merge(sdkPlayerStateMapped$, apiPlayerState$)
  .remember();

// TODO: always subscribe?
const { handler: pause, stream: pause$ } = createEventHandler<
  void,
  Stream<void>
>();
const pauses$ = xs
  .combine(token$, pause$)
  .map(async ([token]) => {
    const resp = await fetch(`https://api.spotify.com/v1/me/player/pause`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!resp.ok) {
      throw new Error("Couldn't pause.");
    }
  })
  .map(xs.fromPromise)
  .flatten();

const { handler: play, stream: play$ } = createEventHandler<
  string[] | void,
  Stream<string[] | void>
>();
const plays$ = play$
  .compose(sampleCombine(token$, playerState$, devices$, deviceId$))
  .map(async ([playInput, token, playerState, devices, deviceId]) => {
    let deviceIdToPlayOn;
    if (!playerState) {
      deviceIdToPlayOn = deviceId || devices[0].id;
    }

    const resp = await fetch(
      `https://api.spotify.com/v1/me/player/play${
        deviceIdToPlayOn ? `?device_id=${deviceIdToPlayOn}` : ""
      }`,
      {
        method: "PUT",
        body: JSON.stringify({
          uris: playInput,
        }),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (!resp.ok) {
      throw new Error("Couldn't play.");
    }
  })
  .map(xs.fromPromise)
  .flatten();

plays$.subscribe({
  next: () => {},
});
pauses$.subscribe({
  next: () => {},
});

playerState$.subscribe({
  next: val => {
    console.log("bw: player state", val);
  },
});

export function useSpotifyPlayer({
  token,
  playerName,
}: {
  token: string;
  playerName: string;
}) {
  const ready = useXstream(ready$, false);
  const playerState = useXstream(playerState$, undefined);
  const devices = useXstream(devices$, []);

  useScript({
    src: "https://sdk.scdn.co/spotify-player.js",
  });

  useEffect(() => {
    if (token) {
      setToken(token);
    }
  }, [token]);

  useEffect(() => {
    setPlayerName(playerName);
  }, [playerName]);

  console.log("bw: hook", { ready, playerState, devices });

  return {
    ready,
    playerState,
    pause,
    play,
  };
}
export function useSpotifyControls() {
  return {
    pause,
    play,
  };
}

// player.addListener("initialization_error", ({ message }: any) => {
//   console.error(message);
// });
// player.addListener("authentication_error", ({ message }: any) => {
//   console.error(message);
// });
// player.addListener("account_error", ({ message }: any) => {
//   console.error(message);
// });
// player.addListener("playback_error", ({ message }: any) => {
//   console.error(message);
// });
