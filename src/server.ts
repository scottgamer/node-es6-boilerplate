import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./routes";
import "reflect-metadata";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { createConnection, getConnectionOptions } from "typeorm";
import * as Logger from "./utils/Logger";

getConnectionOptions()
  .then((connectionOptions) => {
    return createConnection({
      ...connectionOptions,
      namingStrategy: new SnakeNamingStrategy(),
    }).then(async (connection) => {
      process.on("uncaughtException", (error) => {
        Logger.err.error(error);
        process.exit(1);
      });

      process.on("unhandledRejection", (error) => {
        Logger.info.error(error);
        process.exit(1);
      });

      const app = express();
      applyMiddleware(middleware, app);
      applyRoutes(routes, app);
      applyMiddleware(errorHandlers, app);

      const { PORT = 3000 } = process.env;

      app.listen(PORT, () => {
        if (process.env.NODE_ENV === "production") {
          Logger.info.info(`Server is running on http://localhost:${PORT}`);
        }
        console.log(`Server is running on http://localhost:${PORT}`);
      });
    });
  })
  .catch((error) => {
    Logger.err.error(error.message);
  });
