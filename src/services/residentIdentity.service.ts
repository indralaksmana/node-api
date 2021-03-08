// Modules
import _ from 'lodash';
import ResidentIdentity from '../models/residentIdentity.model'

export default class ResidentIdentityService {

  async getIdentity (req: any): Promise<any> {
    try {
        // import all request into database
      const identity = await ResidentIdentity.query().where('nomor', req.params.nomor);
      return await Promise.resolve(identity);
    } catch(err) {
      return await Promise.reject(new Error(`error: ${err}`));
    }
  }

}