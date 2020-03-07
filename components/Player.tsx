import React from "react";
import { useSpotifyPlayer } from "../hooks/useSpotifyPlayer";

export default function Player({ token }: { token: string }) {
  const { ready, playerState, pause, play } = useSpotifyPlayer({
    token,
    playerName: "Tagify Player",
  });
  // return <SpotifyPlayer token={token} />;
  const item = playerState?.item;
  return (
    <div>
      Player
      {item && <div>{item.name}</div>}
      {playerState && playerState.progress_ms}
      {playerState ? (
        playerState.is_playing ? (
          <button onClick={() => pause()}>Pause</button>
        ) : (
          <button onClick={() => play()}>Play</button>
        )
      ) : null}
    </div>
  );
}
