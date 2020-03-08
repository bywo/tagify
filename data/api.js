export async function createPlaylist(fetch, userId, playlistName) {
  const resp = await fetch(
    `https://api.spotify.com/v1/users/${userId}/playlists`,
    {
      method: "POST",
      body: JSON.stringify({
        name: playlistName,
        description: "Created by Tagify.",
      }),
    },
  );
  if (!resp.ok) {
    throw new Error("Couldn't create tag.");
  }

  return resp.json();
}

export async function addToPlaylist(fetch, playlistId, trackId) {
  const resp = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    {
      method: "POST",
      body: JSON.stringify({
        uris: [trackId],
      }),
    },
  );

  if (resp.ok) {
    return;
  }

  const errorBody = await resp.json();
  const errorMessage =
    (errorBody && errorBody.error && errorBody.error.message) ||
    "An unexpected error occurred.";
  throw new Error(`Failed to add tag: ${errorMessage}`);
}

export async function removeFromPlaylist(fetch, playlistId, trackId) {
  const resp = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    {
      method: "DELETE",
      body: JSON.stringify({
        tracks: [{ uri: trackId }],
      }),
    },
  );

  if (resp.ok) {
    return;
  }
  throw new Error("Failed to remove tag.");
}

export async function fetchPlaylists(
  fetch,
  url = "https://api.spotify.com/v1/me/playlists?limit=50",
) {
  const resp = await fetch(url);
  const { next, items } = await resp.json();

  let ret = items;
  if (next) {
    ret = items.concat(await fetchPlaylists(fetch, next));
  }
  return ret;
}

export async function fetchPlaylistTracks(
  fetch,
  playlistId,
  url,
  savePageOfTracks,
) {
  const resp = await fetch(url);
  const { next, items } = await resp.json();

  await savePageOfTracks(items);

  let ret = items;
  if (next) {
    ret = items.concat(
      await fetchPlaylistTracks(fetch, playlistId, next, savePageOfTracks),
    );
  }
  return ret;
}
