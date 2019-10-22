/**
 * Add more middleware functions            *
 * and import them in ./middleware/index.ts *
 */

import { handleCors, handleBodyRequestParsing, handleCompression } from "./common";

export default [handleCors, handleBodyRequestParsing, handleCompression];
