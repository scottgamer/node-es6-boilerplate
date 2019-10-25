import { Request, Response, NextFunction } from "express";
import * as Logger from "../utils/Logger";

export const logRequest = (req: Request, res: Response, next: NextFunction) => {
  Logger.request.info({
    title: `\u001b[35m Request Body ${req.method} ${req.url} \u001b[0m`,
    method: req.method,
    endpoint: req.url,
    client: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body
  });
  next();
};

export const logResponse = (req: Request, res: Response, next: NextFunction) => {
  res.on("finish", () => {
    Logger.request.info({
      title: `\u001b[34m Response Body \u001b[0m`,
      statusCode: res.statusCode,
      method: req.method,
      endpoint: req.originalUrl,
      responseTime: res.getHeaders()["x-response-time"]
    });
  });
  next();
};
