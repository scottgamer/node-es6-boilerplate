/**
 * Add more middleware functions            *
 * and import them in ./middleware/index.ts *
 */

import { handleCors, handleBodyRequestParsing, handleCompression, handleHelmet } from "./common";

export default [handleCors, handleBodyRequestParsing, handleCompression, handleHelmet];
