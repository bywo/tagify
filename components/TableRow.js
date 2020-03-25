import _ from "lodash";
import React from "react";
import CreatableSelect from "react-select/creatable";
import { components } from "react-select";
import theme from "../theme";
import { baseStyles } from "./Tag";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
import { setTagQuery, onChangeFocusedTrack } from "../data/UIStore";

const { MultiValue, SelectContainer } = components;

export default class TableRow extends React.Component {
  state = { hover: false, menuOpen: false };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.hover !== this.state.hover) {
      return true;
    }

    const { track, tags, trackColWidth, artistColWidth } = this.props;
    if (track.uri !== nextProps.track.uri) {
      return true;
    }

    if (tags.length !== nextProps.tags.length) {
      return true;
    }

    if (trackColWidth !== nextProps.trackColWidth) {
      return true;
    }

    if (artistColWidth !== nextProps.artistColWidth) {
      return true;
    }

    return false;
  }

  onMouseEnter = e => {
    this.setState({ hover: true });
  };

  onMouseLeave = e => {
    this.setState({ hover: false });
  };

  render() {
    const { track } = this.props;
    return (
      <div
        style={{
          display: "flex",
          borderBottom: `solid 1px ${theme.colors.background}`,
          flexDirection: "column",
          // alignItems: "center",
          background: theme.colors.backgroundLighter,
          color: theme.colors.darkTextHighEmphasis,
          fontSize: theme.fontSizes.m,
          cursor: "pointer",
        }}
        // onMouseEnter={this.onMouseEnter}
        // onMouseLeave={this.onMouseLeave}
        onClick={() => {
          this.props.play(track.uri);
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              flexGrow: 1,
              padding: theme.spacing.m,
              minWidth: "33%",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "19px",
                color: "#2d2d2d",
                marginBottom: 3,
              }}
            >
              {track.name}
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "16px",
                color: "#585858",
              }}
            >
              {track.artists &&
                track.artists.map((a, index) => (
                  <span key={a.id}>
                    {a.name}
                    {index !== track.artists.length - 1 ? ", " : null}
                  </span>
                ))}
            </div>
          </div>
          <PlayCircleFilled
            style={{
              alignSelf: "center",
              marginRight: 12,
            }}
          />
        </div>
        <div
          style={{
            flexGrow: "1",
            padding: `0 ${theme.spacing.m}px ${theme.spacing.s}px`,
            textAlign: "left",
            lineHeight: 0,
            minWidth: 0,
          }}
        >
          {this.props.tags.map(tag => (
            <div
              key={tag.value}
              style={{
                ...baseStyles,
                background: tag.color,
                margin: "0 3px 3px 0",
                maxWidth: "100%",
              }}
              onClick={e => {
                e.stopPropagation();
                setTagQuery([tag.value]);
              }}
            >
              {tag.label}
            </div>
          ))}
          <div
            style={{
              display: "inline-block",
              lineHeight: 0,
              verticalAlign: "middle",
              padding: "0 3px",
              // margin: "0 3px 3px 0",
            }}
            onClick={e => {
              e.stopPropagation();
              onChangeFocusedTrack(track.uri);
            }}
          >
            <PlaylistAdd fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
}

// track.episode ? null : this.state.hover || this.state.menuOpen ? (
//   <CreatableSelect
//     isMulti
//     isSearchable
//     backspaceRemovesValue={false}
//     isClearable={false}
//     options={this.props.tagOptions}
//     value={this.props.tags}
//     onMenuOpen={() => {
//       this.setState({ menuOpen: true });
//     }}
//     onMenuClose={() => {
//       this.setState({ menuOpen: false });
//     }}
//     onChange={selectedOptions => {
//       /* this.props.cellMeasurerCache.clear(this.props.index); */
//       const added = _.difference(selectedOptions, this.props.tags);
//       const deleted = _.difference(this.props.tags, selectedOptions);
//       added
//         .filter(option => option.__isNew__)
//         .forEach(({ label }) => {
//           this.props.createAndAddTag(track.uri, label);
//         });
//       added
//         .filter(option => !option.__isNew__)
//         .forEach(({ value: playlistId }) => {
//           this.props.addTag(track.uri, playlistId);
//         });
//       deleted.forEach(({ value: playlistId }) => {
//         this.props.removeTag(track.uri, playlistId);
//       });
//     }}
//     styles={{
//       multiValue: (styles, { data }) => ({
//         ...styles,
//         backgroundColor: data.color,
//       }),
//       multiValueLabel: styles => ({
//         ...styles,
//         color: "white",
//       }),
//       multiValueRemove: styles => ({
//         ...styles,
//         color: "white",
//       }),
//     }}
//   />
// ) : (
//   <div
//     style={{
//       display: "flex",
//       flexWrap: "wrap",
//       alignItems: "center",
//       padding: "2px 45px 2px 8px",
//       border: "solid 1px hsl(0,0%,80%)",
//       borderRadius: "4px",
//       minHeight: 38,
//     }}
//   >
//     {this.props.tags.map(tag => (
//       <div
//         key={tag.value}
//         style={{
//           borderRadius: "2px",
//           color: "white",
//           fontSize: "85%",
//           overflow: "hidden",
//           padding: "3px 25px 3px 3px",
//           paddingLeft: "6px",
//           textOverflow: "ellipsis",
//           whiteSpace: "nowrap",
//           boxSizing: "border-box",
//           background: tag.color,
//           margin: "2px",
//         }}
//       >
//         {tag.label}
//       </div>
//     ))}
//     <div style={{ padding: "2px 0", margin: "2px", width: 2 }}>
//       {`\u2060`}
//     </div>
//   </div>
// );
