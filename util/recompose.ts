import {
  componentFromStreamWithConfig,
  createEventHandlerWithConfig,
} from "recompose";
import xstreamConfig from "recompose/xstreamObservableConfig";

export const componentFromStream = componentFromStreamWithConfig(xstreamConfig);

export const createEventHandler = createEventHandlerWithConfig(xstreamConfig);
