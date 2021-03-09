// Modules
import Resident from '../models/resident.model'

export default class ResidentService {

  async getIdentity (req: any): Promise<any> {
    try {
        // import all request into database
      const identity = await Resident.query().findOne({'nomor': req.params.nomor});
      return await Promise.resolve(identity);
    } catch(err) {
      return await Promise.reject(new Error(`error: ${err}`));
    }
  }

}