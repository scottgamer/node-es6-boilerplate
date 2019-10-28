/********************************************
 * Add here more middleware functions       *
 * and import them in ./middleware/index.ts *
 *******************************************/

import { Router } from "express";
import cors from "cors";
import parser from "body-parser";
import compression from "compression";
import helmet from "helmet";
import session from "express-session";
import { logRequest, logResponse } from "./logger";
import morganBody from "morgan-body";
import dotenv from "dotenv";

dotenv.config();

export const handleCors = (router: Router) =>
  router.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (router: Router) => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

export const handleCompression = (router: Router) => {
  router.use(compression());
};

export const handleHelmet = (router: Router) => {
  router.use(helmet());
};

export const handleSession = (router: Router) => {
  const sess = {
    secret: "session_secret",
    cookie: {
      secure: false
    },
    resave: true, // save session to session store
    saveUninitialized: true // save session if not initilizaed
  };

  if (process.env.NODE_ENV === "production") {
    // enable HTTPS secure proxy and cookies
    // router.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true;
  }
  router.use(session(sess));
};

export const handleRequestLogging = (router: Router) => {
  router.use(logRequest);
};

export const handleResponseLogging = (router: Router) => {
  router.use(logResponse);
};

export const handleBody = (router: Router) => {
  morganBody(router);
};
