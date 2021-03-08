// Modules
import cors from 'cors';
import bodyParser from 'body-parser';
import { Model } from 'objection';
import express, {Application, Request, Response} from 'express';
import { errorHandler } from "./middlewares/error.middleware";
import { notFoundHandler } from "./middlewares/notfound.middleware";

// Services
import ResidentIdentityService from './services/residentIdentity.service'

// Configs
import knex from './configs/db.config';
import appConfig from './configs/app.config';

// Define variables
const app: Application = express();
const router = express.Router();
const port: number = appConfig.port;

// Give the knex instance to objection.
Model.knex(knex);

// use cors
app.use(cors());

// use parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

router.get('/identity/:nomor', async (req: Request, res: Response) => {
  try {
    const residentIdentityService = new ResidentIdentityService();
    const identity = await residentIdentityService.getIdentity(req);
    // return success response
    return res.status(200).send({ status: 'success', message: '', data: identity });
  } catch(err) {
    // return error respose
    throw new Error();
  }
});

// use express router
app.use('/api/v1', router);

// use error handling
app.use(errorHandler);
app.use(notFoundHandler);

// listen server
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});