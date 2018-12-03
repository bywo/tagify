import React from "react";

export default class ResizeHandle extends React.Component {
  render() {
    return (
      <div
        onMouseDown={this._onMouseDown}
        onMouseUp={this._onMouseUp}
        {...this.props}
        style={{
          cursor: "col-resize",
          ...this.props.style,
        }}
      />
    );
  }

  _onMouseDown = e => {
    e.preventDefault();
    this.prevX = e.clientX;
    window.addEventListener("mousemove", this._onMouseMove);
    window.addEventListener("mouseup", this._onMouseUp);
  };

  _onMouseUp = e => {
    const delta = e.clientX - this.prevX;
    this.prevX = e.clientX;
    this.props.onResize && this.props.onResize(delta);
    window.removeEventListener("mouseup", this._onMouseUp);
    window.removeEventListener("mousemove", this._onMouseMove);
  };

  _onMouseMove = e => {
    e.preventDefault();
    const delta = e.clientX - this.prevX;
    this.prevX = e.clientX;
    this.props.onResize && this.props.onResize(delta);
  };
}
