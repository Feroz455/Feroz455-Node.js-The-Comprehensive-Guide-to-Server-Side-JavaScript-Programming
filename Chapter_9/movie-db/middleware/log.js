import { request, response } from "express";

const log = (request, response, next) => {
  console.log(request.url);
  next();
};

export { log };
