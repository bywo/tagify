export default class Login extends React.Component {
  state = { baseUrl: "" };

  componentDidMount() {
    this.setState({ baseUrl: window.location.origin });
  }

  render() {
    return (
      <a
        href={`https://accounts.spotify.com/authorize?client_id=be37bc8bbe834aa4a98be0b8e7e89321&response_type=token&redirect_uri=${
          this.state.baseUrl
        }/callback&scope=streaming%20playlist-modify-private%20playlist-modify-public`}
      >
        Login to Spotify
      </a>
    );
  }
}
