/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/Http.exception';

function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  const reportabel = error.reportabel
  reportabel ? console.log('error: ', error) : '';
  response
    .status(status)
    .send({
      status,
      message
    });
}

export default errorMiddleware;
