// Modules
import {Request, Response, NextFunction} from 'express';

// Services
import ResidentService from '../services/resident.service'

export default class ResidentController {
    public async getResidentIdentity (req: Request, res: Response, next: NextFunction) {
      try {
        const residentIdentityService = new ResidentService();
        const identity = await residentIdentityService.getIdentity(req);
        // return success response
        return res.status(200).send({ status: 'success', message: '', data: identity });
      } catch(err) {
        // return error respose
        next(err);
      }
    }
}