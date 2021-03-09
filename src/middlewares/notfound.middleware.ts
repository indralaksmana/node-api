/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";

function notFoundMiddleware(request: Request, response: Response, next: NextFunction) {
  const status = 404;
  const message = "Resource not found";

  response.status(404).send({status, message});
}

export default notFoundMiddleware;