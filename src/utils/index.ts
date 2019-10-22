import { Router } from "express";

type Wrapper = (router: Router) => void;

export const applyMiddleware = (middlewareWrapper: Wrapper[], router: Router) => {
  for (const wrapper of middlewareWrapper) {
    wrapper(router);
  }
};
