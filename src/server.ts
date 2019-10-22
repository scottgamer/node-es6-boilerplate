import http from "http";
import express from "express";
import { applyMiddleware } from "./utils";
import middleware from "./middleware";

const router = express();
applyMiddleware(middleware, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}...`));
