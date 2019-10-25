/********************************************
 * Add here more middleware functions       *
 * and import them in ./middleware/index.ts *
 *******************************************/

import {
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleHelmet,
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
  handleAPIDocs,
  handleRequestLogging,
  handleResponseLogging,
  handleBody
];
