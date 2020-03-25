import { CSSProperties } from "react";

export default function AlbumArt({
  album,
  style,
}: {
  album: { images: Array<{ url: string }> };
  style: CSSProperties;
}) {
  let url;
  const { images } = album;
  if (images.length) {
    if (images[1]) {
      url = images[1].url;
    } else {
      url = images[0].url;
    }
  }
  return (
    <img
      style={{
        width: 60,
        height: 60,
        background: "gray",
        ...style,
      }}
      src={url}
    />
  );
}
