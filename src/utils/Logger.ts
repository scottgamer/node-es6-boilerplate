import * as Winston from "winston";
import chalk from "chalk";
import DailyRotateFile = require("winston-daily-rotate-file");

export const err = Winston.createLogger({
  format: Winston.format.combine(
    Winston.format.colorize(),
    Winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    Winston.format.prettyPrint(),
    Winston.format.printf((inf: any) => {
      const ts = inf.timestamp.slice(0, 19).replace("T", " ");
      try {
        return `\n\u001b[92m${ts}\u001b[0m [${inf.level}]:\n${JSON.stringify(
          inf,
          null,
          4
        )}`;
      } catch (err) {
        return err.message;
      }
    })
  ),
  level: "error",
  transports: [
    new Winston.transports.Console(),
    new DailyRotateFile({
      filename: "./logs/error-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: false,
      maxSize: "20m",
      maxFiles: process.env.SAVE_LOG_FILES_FOR
    })
  ]
});

export const info = Winston.createLogger({
  format: Winston.format.combine(
    Winston.format.colorize(),
    Winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    Winston.format.prettyPrint(),
    Winston.format.printf((inf: any) => {
      const { timestamp, level } = inf;
      const ts = timestamp.slice(0, 19).replace("T", " ");

      try {
        return `\n\u001b[92m${ts}\u001b[0m [${level}]:\n${JSON.stringify(inf, null, 4)}`;
      } catch (err) {
        return err.message;
      }
    })
  ),
  level: "info",
  transports: [
    new Winston.transports.Console(),
    new DailyRotateFile({
      filename: "./logs/info-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: false,
      maxSize: "20m",
      maxFiles: process.env.SAVE_LOG_FILES_FOR
    })
  ]
});

export const request = Winston.createLogger({
  format: Winston.format.combine(
    Winston.format.colorize(),
    Winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    Winston.format.prettyPrint(),
    Winston.format.printf((inf: any) => {
      const { timestamp, level, message } = inf;
      const title = message.title;
      delete message.title;
      const ts = timestamp.slice(0, 19).replace("T", " ");
      try {
        return `\n\u001b[92m${ts}\u001b[0m [${level}]:\n${title}${
          message.statusCode ? `- ${chalk.green(message.statusCode)}` : ""
        }\n${JSON.stringify(inf, null, 4)}`;
      } catch (error) {
        return error.message;
      }
    })
  ),
  level: "info",
  transports: [
    new DailyRotateFile({
      filename: "./logs/requests-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: false,
      maxSize: "20m",
      maxFiles: process.env.SAVE_LOG_FILES_FOR
    })
  ]
});
