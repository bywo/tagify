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
    throw new Error("Couldn't create tag");
  }

  return resp.json();
}
