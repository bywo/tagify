import React from "react";
import as from "../util/as";
import theme from "../theme";

const scopes = [
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-library-read",
  "user-library-modify",
  "playlist-read-private",
  "playlist-modify-private",
  "playlist-modify-public",
  "playlist-read-collaborative",
];

export default class Login extends React.Component {
  state = { baseUrl: "" };

  componentDidMount() {
    this.setState({ baseUrl: window.location.origin });
  }

  render() {
    return (
      <div
        key="login"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "60%",
            maxWidth: 640,
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              fontWeight: 700,
              margin: 0,
              lineHeight: "1",
            }}
          >
            Welcome to Tagify
          </h1>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: 400,
              margin: `${theme.spacing.l}px 0 0`,
            }}
          >
            Browse and organize your Spotify library more easily with tags
          </h2>

          <a
            style={{
              display: "inline-block",
              color: theme.colors.lightTextHighEmphasis,
              background: theme.colors.primary,
              padding: `${theme.spacing.m}px ${theme.spacing.l}px`,
              textDecoration: "none",
              borderRadius: theme.borderRadius.m,
              marginTop: theme.spacing.xl,
              fontWeight: 600,
            }}
            href={`https://accounts.spotify.com/authorize?client_id=be37bc8bbe834aa4a98be0b8e7e89321&response_type=token&redirect_uri=${this
              .state.baseUrl + as("/callback")}&scope=${scopes.join("%20")}`}
          >
            Login with Spotify
          </a>
          <p style={{ fontSize: "14px", width: "80%" }}>
            Tags are synchronized with your Spotify playlists. Creating a new
            tag will create a new Spotify playlist.
          </p>
        </div>
      </div>
    );
  }
}
