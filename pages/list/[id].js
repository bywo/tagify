import { useEffect } from "react";
import { onSelectPlaylist } from "../../data/UIStore";
import App from "../../components/App";

export default function TrackList({ id }) {
  useEffect(() => {
    onSelectPlaylist(id);
  }, [id]);

  return <App />;
}

TrackList.getInitialProps = ({ query: { id } }) => ({ id });
