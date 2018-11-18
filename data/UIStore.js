import fetch from "../util/fetch";
import { observable, autorun, computed, decorate } from "mobx";
import _ from "lodash";

export default class UIStore {
  constructor() {
    window.addEventListener("resize", () => {
      this.state.windowWidth = window.innerWidth;
      this.state.windowHeight = window.innerHeight;
    });
  }
  state = observable({
    panelGutter: 20,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    sidebarWidth: 200,
    trackColWidth: 180,
    artistColWidth: 180,
  });

  get mainPanelWidth() {
    return (
      this.state.windowWidth - this.state.sidebarWidth - this.state.panelGutter
    );
  }
}

decorate(UIStore, {
  mainPanelWidth: computed,
});
