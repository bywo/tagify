import ReactGA from "react-ga";
import debounce from "xstream/extra/debounce";
import * as user from "./UserStore";
import * as ui from "./UIStore";
import * as playlist from "./PlaylistStore";

ReactGA.initialize("UA-130563636-1", {
  debug: process.env.NODE_ENV !== "production",
});

user.user$.addListener({
  next(u) {
    ReactGA.set({ userId: u.id });
  },
});

ui.selectedPlaylistChanges$.addListener({
  next(playlistId) {
    ReactGA.event({
      category: "Navigation",
      action: "Selected playlist",
      label: playlistId,
    });
  },
});

playlist.addTagEvents$.addListener({
  next({ trackId }) {
    ReactGA.event({
      category: "Organization",
      action: "Tagged a track",
      label: trackId,
    });
  },
});

playlist.removeTagEvents$.addListener({
  next({ trackId }) {
    ReactGA.event({
      category: "Organization",
      action: "Untagged a track",
      label: trackId,
    });
  },
});

playlist.createAndAddTagEvents$.addListener({
  next({ playlistName }) {
    ReactGA.event({
      category: "Organization",
      action: "Create tag",
      label: playlistName,
    });
  },
});

ui.searchQueryChanges$.compose(debounce(500)).addListener({
  next(query) {
    ReactGA.event({
      category: "Navigation",
      action: "Filter tracks",
      label: query,
    });
  },
});

if (global.window) {
  window.onerror = message => {
    ReactGA.exception({
      description: message,
    });
  };
}
