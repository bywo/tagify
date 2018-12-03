import _ from "lodash";
import React from "react";
import CreatableSelect from "react-select/lib/Creatable";
import { components } from "react-select";
import theme from "../theme";

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
    return (
      <div
        ref={el => (this.root = el)}
        style={{
          display: "flex",
          borderBottom: `solid 1px ${theme.colors.background}`,
          alignItems: "baseline",
          background: theme.colors.backgroundLighter,
          color: theme.colors.darkTextHighEmphasis,
          fontSize: theme.fontSizes.m,
        }}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div
          style={{
            flexShrink: "0",
            width: "25%",
            padding: theme.spacing.m,
          }}
        >
          {this.props.track.name}
        </div>
        <div
          style={{
            flexShrink: "0",
            width: "25%",
            padding: theme.spacing.m,
          }}
        >
          {this.props.track.artists.map((a, index) => (
            <span key={a.id}>
              {a.name}
              {index !== this.props.track.artists.length - 1 ? ", " : null}
            </span>
          ))}
        </div>
        <div
          style={{
            flexGrow: "1",
            padding: theme.spacing.m,
          }}
        >
          {this.state.hover || this.state.menuOpen ? (
            <CreatableSelect
              isMulti
              isSearchable
              backspaceRemovesValue={false}
              isClearable={false}
              options={this.props.tagOptions}
              value={this.props.tags}
              onMenuOpen={() => {
                this.setState({ menuOpen: true });
              }}
              onMenuClose={() => {
                this.setState({ menuOpen: false });
              }}
              onChange={selectedOptions => {
                /* this.props.cellMeasurerCache.clear(this.props.index); */
                const added = _.difference(selectedOptions, this.props.tags);
                const deleted = _.difference(this.props.tags, selectedOptions);
                added
                  .filter(option => option.__isNew__)
                  .forEach(({ label }) => {
                    console.log("creating createAndAddTag");
                    this.props.createAndAddTag(this.props.track.uri, label);
                  });
                added
                  .filter(option => !option.__isNew__)
                  .forEach(({ value: playlistId }) => {
                    this.props.addTag(this.props.track.uri, playlistId);
                  });
                deleted.forEach(({ value: playlistId }) => {
                  this.props.removeTag(this.props.track.uri, playlistId);
                });
              }}
              styles={{
                multiValue: (styles, { data }) => ({
                  ...styles,
                  backgroundColor: data.color,
                }),
                multiValueLabel: styles => ({
                  ...styles,
                  color: "white",
                }),
                multiValueRemove: styles => ({
                  ...styles,
                  color: "white",
                }),
              }}
            />
          ) : (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                padding: "2px 45px 2px 8px",
                border: "solid 1px hsl(0,0%,80%)",
                borderRadius: "4px",
                minHeight: 38,
              }}
            >
              {this.props.tags.map(tag => (
                <div
                  key={tag.value}
                  style={{
                    borderRadius: "2px",
                    color: "white",
                    fontSize: "85%",
                    overflow: "hidden",
                    padding: "3px 25px 3px 3px",
                    paddingLeft: "6px",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    boxSizing: "border-box",
                    background: tag.color,
                    margin: "2px",
                  }}
                >
                  {tag.label}
                </div>
              ))}
              <div style={{ padding: "2px 0", margin: "2px", width: 2 }}>
                {`\u2060`}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
