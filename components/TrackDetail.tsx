import useXstream from "../hooks/useXstream";
import { tracksById$ } from "../data/PlaylistStore";
import * as playlist from "../data/PlaylistStore";
import { MemoryStream } from "xstream";
import Tag from "./Tag";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Done from "@material-ui/icons/Done";
import { onChangeFocusedTrack } from "../data/UIStore";
import Add from "@material-ui/icons/Add";
import Edit from "@material-ui/icons/Edit";
import { useState, useMemo } from "react";
import SearchInput from "./SearchInput";
import theme from "../theme";
import Row from "./Row";

export default function TrackDetail({
  trackId,
  style,
}: {
  trackId: string;
  style: React.CSSProperties;
}) {
  const tracksById = useXstream(tracksById$);
  const track = tracksById && tracksById[trackId];
  const tagsByTrack = useXstream(
    (playlist.tagsByTrack$ as unknown) as MemoryStream<{
      [k: string]: string[];
    }>,
    {},
  );
  const tagsById = useXstream(playlist.tagsById$);
  const allTags = useXstream(playlist.playlists$ as MemoryStream<any[]>, []);

  const tagNameMap = useMemo(() => {
    const ret: { [k: string]: boolean } = {};
    allTags.forEach(tag => {
      ret[tag.name.toLowerCase()] = true;
    });

    return ret;
  }, [tagsById, allTags]);

  // const [isEditingTags, setIsEditingTags] = useState(false);
  const isEditingTags = true;
  const [tagSearchText, onChangeTagSearchText] = useState("");

  const tagsForTrack = tagsByTrack[trackId];
  const tags = tagsForTrack ? tagsForTrack.map(tag => tagsById[tag]) : [];

  const eligibleTags = useMemo(
    () => allTags.filter(t => tagsForTrack && !tagsForTrack.includes(t.id)),
    [allTags, tagsForTrack],
  );

  const filtered = tagSearchText
    ? eligibleTags.filter(t =>
        t.name.toLocaleLowerCase().includes(tagSearchText.toLocaleLowerCase()),
      )
    : eligibleTags;

  if (!track) {
    return null;
  }

  if (isEditingTags) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          background: "#fff",
          ...style,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: theme.spacing.m,
            paddingBottom: 0,
          }}
        >
          <div style={{ fontWeight: 800, fontSize: "24px", flexGrow: 1 }}>
            Edit tags
          </div>
          <div
            style={{ lineHeight: 0, marginLeft: 12, cursor: "pointer" }}
            onClick={() => onChangeFocusedTrack(undefined)}
          >
            <Done />
          </div>
        </div>
        <div
          style={{
            fontWeight: 600,
            fontSize: "14px",
            padding: theme.spacing.m,
            borderBottom: "solid 1px #bbb",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 12 }}
          >
            <img
              style={{
                width: 60,
                height: 60,
                marginRight: 12,
                background: "gray",
              }}
              src={track.album.images[1].url}
            />
            <div style={{ flexGrow: 1, flexBasis: 0 }}>
              <div
                style={{
                  fontSize: "21px",
                  fontWeight: 800,
                  marginBottom: 3,
                }}
              >
                {track.name}
              </div>
              <div
                style={{
                  fontSize: "14px",
                }}
              >
                {track.artists &&
                  track.artists.map((a: any, index: number) => (
                    <span key={a.id}>
                      {a.name}
                      {index !== track.artists.length - 1 ? ", " : null}
                    </span>
                  ))}
              </div>{" "}
            </div>
          </div>
          <SearchInput
            value={tagSearchText}
            placeholder="Filter by tags"
            onChange={onChangeTagSearchText}
            style={{ paddingBottom: 3, flexGrow: 1 }}
            inputStyle={{ marginBottom: 3 }}
          >
            {tags.map(t => (
              <Tag
                id={t.id}
                key={t.id}
                style={{ marginRight: 3, marginBottom: 3 }}
                name={t.name}
                icon="close"
                onClick={() => {
                  playlist.removeTag({ trackId, playlistId: t.id });
                }}
              />
            ))}
          </SearchInput>
        </div>
        <div style={{ flexGrow: 1, flexBasis: 0, overflow: "auto" }}>
          {tagSearchText.length > 0 &&
          !tagNameMap[tagSearchText.toLowerCase()] ? (
            <Row
              onClick={() => {
                playlist.createAndAddTag({
                  trackId,
                  playlistName: tagSearchText,
                });
                onChangeTagSearchText("");
              }}
              actionIcon={<Add />}
            >
              <div style={{ fontSize: "14px", fontWeight: 600 }}>
                Create new tag:{" "}
                <Tag
                  id={"blah"}
                  name={tagSearchText}
                  style={{ margin: "0 12px 0 0", maxWidth: "100%" }}
                />
              </div>
            </Row>
          ) : null}
          {filtered.map(t => (
            <Row
              key={t.id}
              onClick={() => {
                playlist.addTag({ trackId, playlistId: t.id });
                onChangeTagSearchText("");
              }}
              actionIcon={<Add />}
            >
              <Tag
                id={t.id}
                name={t.name}
                style={{ margin: "0 12px 0 0", maxWidth: "100%" }}
              />
            </Row>
          ))}
        </div>{" "}
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: "24px 24px 48px",
        position: "relative",
        background: "#fff",
        ...style,
      }}
    >
      <div
        style={{
          lineHeight: 0,
          position: "absolute",
          top: 12,
          left: 12,
          cursor: "pointer",
        }}
        onClick={() => onChangeFocusedTrack(undefined)}
      >
        <ArrowBack />
      </div>
      <img
        style={{ width: "60%", marginBottom: 24, maxWidth: 400 }}
        src={track.album.images[0].url}
      />

      <div
        style={{
          fontSize: "24px",
          fontWeight: 800,
          marginBottom: 6,
          textAlign: "center",
        }}
      >
        {track.name}
      </div>

      <div style={{ fontSize: "16px", marginBottom: 24, textAlign: "center" }}>
        {track.artists &&
          track.artists.map((a: any, index: number) => (
            <span key={a.id}>
              {a.name}
              {index !== track.artists.length - 1 ? ", " : null}
            </span>
          ))}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
        }}
        // onClick={() => setIsEditingTags(true)}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
          <div style={{ fontWeight: 800, marginRight: 6 }}>Tags</div>{" "}
          <Edit fontSize={"small"} />
        </div>

        <div style={{ textAlign: "center" }}>
          {tags.map(t => (
            <Tag
              key={t.id}
              id={t.id}
              name={t.name}
              style={{ margin: "0 3px 3px 0" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
