// Modules
import * as _ from 'lodash';
import * as bcrypt from 'bcrypt';
import {Request, Response, NextFunction} from 'express';

// Exceptions
import InternalServerException from '../exceptions/InternalServer.exception';
import WrongCredentialsException from '../exceptions/WrongCredentials.exception';

// Services
import AuthenticationService from '../services/authentication.service'

export default class AuthenticationController {
    
    public async login (req: Request, res: Response, next: NextFunction) {
      try {
        const authenticationService = new AuthenticationService();
        const user = await authenticationService.getUser(req);
        if (!_.isEmpty(user)) {
            const isPasswordMatching = await bcrypt.compare(
              req.body.password,
              user.password,
            );
            if (isPasswordMatching) {
                const tokenData = await authenticationService.createToken(user);
                // return success response
                return res.status(200).send({ status: 'success', message: '', data: { user, token: tokenData.token } });
            } else {
              next(new WrongCredentialsException());
            }
          } else {
            next(new WrongCredentialsException());
          }
      } catch(err) {
        // return error respose
        next(new InternalServerException(err));
      }
    }
}