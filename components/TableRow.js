import React from "react";
import CreatableSelect from "react-select/lib/Creatable";
import { components } from "react-select";

const { MultiValue, SelectContainer } = components;

export default class TableRow extends React.Component {
  shouldComponentUpdate(nextProps) {
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

  render() {
    return (
      <div
        style={{
          display: "flex",
          borderBottom: "solid 1px gray",
          alignItems: "baseline",
        }}
      >
        <div
          style={{
            flexShrink: "0",
            width: this.props.trackColWidth,
            padding: "4px",
          }}
        >
          {this.props.track.name}
        </div>
        <div
          style={{
            flexShrink: "0",
            width: this.props.artistColWidth,
            padding: "4px",
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
            padding: "4px",
          }}
        >
          <CreatableSelect
            isMulti
            isSearchable
            options={this.props.tagOptions}
            value={this.props.tags}
            onChange={selectedOptions => {
              this.props.cellMeasurerCache.clear(this.props.index);
              const added = _.difference(selectedOptions, this.props.tags);
              const deleted = _.difference(this.props.tags, selectedOptions);
              added
                .filter(option => option.__isNew__)
                .forEach(({ label }) => {
                  this.props.createTagWithTrack(this.props.track.uri, label);
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
          <SelectContainer />
        </div>
      </div>
    );
  }
}
