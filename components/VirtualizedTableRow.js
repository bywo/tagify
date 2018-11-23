import { CellMeasurer } from "react-virtualized";
import CreatableSelect from "react-select/lib/Creatable";
import TableRow from "./TableRow";

export default class VirtualizedTableRow extends React.Component {
  shouldComponentUpdate(nextProps) {
    // console.log("shouldUpdate", this.props.track.name, nextProps.track.name);
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

    // console.log("return false");
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
        <TableRow {...this.props} />
      </CellMeasurer>
    );
  }
}
