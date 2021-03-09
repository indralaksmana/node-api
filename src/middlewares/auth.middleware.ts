// Modules
import * as jwt from 'jsonwebtoken';
import { Response, NextFunction } from "express";
import DataStoredInToken from '../interfaces/dataStoredInToken';
import RequestWithUser from '../interfaces/requestWithUser.interface';

// Exceptions
import AuthenticationTokenMissingException from '../exceptions/AuthenticationTokenMissingException';
import WrongAuthenticationTokenException from '../exceptions/WrongAuthenticationTokenException';

// Services
import AuthenticationService from '../services/authentication.service'

async function authMiddleware(request: RequestWithUser, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;
    if (authHeader) {
      const secret = process.env.JWT_SECRET;
      try {
        const token = authHeader.split(' ')[1];
        const verificationResponse = jwt.verify(token, secret) as DataStoredInToken;
        const id = verificationResponse.id;
        const authenticationService = new AuthenticationService();
        const user = await authenticationService.getUserById(id);
        if (user) {
          request.user = user;
          next();
        } else {
          next(new WrongAuthenticationTokenException());
        }
      } catch (error) {
        next(new WrongAuthenticationTokenException());
      }
    } else {
      next(new AuthenticationTokenMissingException());
    }
  }

export default authMiddleware;