// Modules
import * as jwt from 'jsonwebtoken';
import User from '../models/user.model'
import DataStoredInToken from '../interfaces/dataStoredInToken';
import TokenData from '../interfaces/tokenData.interface';

export default class AuthenticationService {

  public async getUser(req: any): Promise<any> {
    try {
        // import all request into database
      const user = await User.query().findOne({'username': req.body.username});
      return await Promise.resolve(user);
    } catch(err) {
      return await Promise.reject(new Error(`error: ${err}`));
    }
  }

  public async getUserById(id: number): Promise<any> {
    try {
        // import all request into database
      const user = await User.query().findById(id);
      return await Promise.resolve(user);
    } catch(err) {
      return await Promise.reject(new Error(`error: ${err}`));
    }
  }

  public async createToken(user: User) {
    const expiresIn = 60 * 60; // an hour
    const secret = process.env.JWT_SECRET;
    const dataStoredInToken: DataStoredInToken = {
      id: user.id,
    };
    return {
      expiresIn,
      token: await jwt.sign(dataStoredInToken, secret, { expiresIn }),
    };
  }

}