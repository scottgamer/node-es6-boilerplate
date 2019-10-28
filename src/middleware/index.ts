import {
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleHelmet,
  handleSession,
  handleRequestLogging,
  handleResponseLogging,
  handleBody
} from "./common";
import { handleAPIDocs } from "./apiDocs";

export default [
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleHelmet,
  handleSession,
  handleAPIDocs,
  handleRequestLogging,
  handleResponseLogging,
  handleBody
];
