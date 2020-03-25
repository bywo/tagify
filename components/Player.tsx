import React, { useState, useEffect } from "react";
import { useSpotifyPlayer } from "../hooks/useSpotifyPlayer";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilled from "@material-ui/icons/PauseCircleFilled";
import useInterval from "use-interval";
import theme from "../theme";
import useXstream from "../hooks/useXstream";
import { tagsById$, tagsByTrack$ } from "../data/PlaylistStore";
import { MemoryStream } from "xstream";
import Tag, { baseStyles } from "./Tag";
import { setTagQuery, onChangeFocusedTrack } from "../data/UIStore";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";

export default function Player({ token }: { token: string }) {
  const tagsByTrack = useXstream(tagsByTrack$ as MemoryStream<any>, {});
  const tagsById = useXstream(tagsById$ as MemoryStream<any>, {});
  const { ready, playerState, pause, play } = useSpotifyPlayer({
    token,
    playerName: "Tagify Player",
  });

  const [playStartedState, setPlayStartedState] = useState<
    | {
        startTime: number;
        progressAtStart: number;
      }
    | undefined
  >();

  const isPlaying = playerState?.is_playing || false;
  const progress = playerState?.progress_ms;

  // just a way to force a rerender
  const [dummy, setDummy] = useState({});
  useInterval(
    () => {
      setDummy({});
    },
    playerState?.is_playing ? 1000 : false,
  );

  useEffect(() => {
    if (isPlaying && progress != null) {
      setPlayStartedState({
        startTime: Date.now(),
        progressAtStart: progress,
      });
    } else {
      setPlayStartedState(undefined);
    }
  }, [isPlaying, progress]);

  if (!playerState || !playerState.item) {
    return null;
  }

  const track = playerState.item;
  const progressMs = playStartedState
    ? Date.now() - playStartedState.startTime + playStartedState.progressAtStart
    : playerState.progress_ms;

  const tagIds = tagsByTrack[track.uri] || [];
  const tags = tagIds.map((id: string) => tagsById[id]).filter((t: any) => !!t);

  return (
    <div
      style={{
        position: "relative",
        background: "#fff",
        padding: 12,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          background: "#ccc",
        }}
      >
        <div
          style={{
            width: `${(100 * progressMs) / playerState.item.duration_ms}%`,
            height: 5,
            background: theme.colors.primary,
          }}
        ></div>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <img
          style={{
            width: 50,
            height: 50,
            marginRight: 12,
            background: "gray",
          }}
          src={track.album.images[1].url}
        />
        <div style={{ flexGrow: 1, flexBasis: 0 }}>
          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              lineHeight: "19px",
              color: "#2d2d2d",
              marginBottom: 3,
            }}
          >
            {track.name}
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "16px",
              color: "#585858",
            }}
          >
            {track.artists &&
              track.artists.map((a: any, index: number) => (
                <span key={a.uri}>
                  {a.name}
                  {index !== track.artists.length - 1 ? ", " : null}
                </span>
              ))}
          </div>
        </div>
        <div
          style={{
            padding: `6px 12px`,
            lineHeight: 0,
            cursor: "pointer",
            color: "#555",
            marginRight: -12,
          }}
          onClick={() => (playerState.is_playing ? pause() : play())}
        >
          {playerState.is_playing ? (
            <PauseCircleFilled fontSize="large" />
          ) : (
            <PlayCircleFilled fontSize="large" />
          )}
        </div>
      </div>
      <div
        style={{
          flexGrow: 1,
          textAlign: "left",
          lineHeight: 0,
          minWidth: 0,
        }}
      >
        {tags.map((tag: any) => (
          <Tag
            key={tag.id}
            id={tag.id}
            name={tag.name}
            style={{
              margin: "0 3px 3px 0",
              maxWidth: "100%",
            }}
            onClick={e => {
              e.stopPropagation();
              setTagQuery([tag.id]);
            }}
          />
        ))}
        <div
          style={{
            display: "inline-block",
            lineHeight: 0,
            verticalAlign: "middle",
            padding: "0 3px",
            // margin: "0 3px 3px 0",
          }}
          onClick={e => {
            e.stopPropagation();
            onChangeFocusedTrack(track.uri);
          }}
        >
          <PlaylistAdd fontSize="small" />
        </div>
      </div>
    </div>
  );
}
