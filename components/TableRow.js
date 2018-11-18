import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import CreatableSelect from "react-select/lib/Creatable";
import randomMC from "random-material-color";

export default class TableRow extends React.Component {
  componentWillMount() {
    console.log("willMount");
  }

  shouldComponentUpdate(nextProps) {
    console.log("shouldUpdate", this.props.track.name, nextProps.track.name);
    if (this.props.track.uri !== nextProps.track.uri) {
      return true;
    }

    if (this.props.tags.length !== nextProps.tags.length) {
      return true;
    }

    if (this.props.trackColWidth !== nextProps.trackColWidth) {
      return true;
    }

    if (this.props.artistColWidth !== nextProps.artistColWidth) {
      return true;
    }

    if (this.props.style.height !== nextProps.style.height) {
      return true;
    }

    console.log("return false");
    return false;
  }

  render() {
    return (
      <CellMeasurer
        cache={this.props.cellMeasurerCache}
        columnIndex={0}
        rowIndex={this.props.index}
        parent={this.props.parent}
      >
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
          </div>
        </div>
      </CellMeasurer>
    );
  }
}
