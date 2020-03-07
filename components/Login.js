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
        style={{ margin: "40px auto", width: "30%", textAlign: "center" }}
      >
        <h1>Welcome to Tagify</h1>
        <p>
          With Tagify, you add tags to songs instead of adding songs to
          playlists. If a tag doesn't yet exist, a new playlist will be created
          in your Spotify account.
        </p>

        <a
          style={{
            display: "inline-block",
            color: theme.colors.lightTextHighEmphasis,
            background: theme.colors.primary,
            padding: `${theme.spacing.m}px ${theme.spacing.l}px`,
            textDecoration: "none",
            borderRadius: theme.borderRadius.m,
            marginTop: theme.spacing.l,
          }}
          href={`https://accounts.spotify.com/authorize?client_id=be37bc8bbe834aa4a98be0b8e7e89321&response_type=token&redirect_uri=${this
            .state.baseUrl + as("/callback")}&scope=${scopes.join("%20")}`}
        >
          Login to Spotify
        </a>
      </div>
    );
  }
}
