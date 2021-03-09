// Modules
import cors from 'cors';
import bodyParser from 'body-parser';
import { Model } from 'objection';
import express, {Application} from 'express';
import errorHandler from "./middlewares/error.middleware";
import notFoundHandler from "./middlewares/notfound.middleware";

// Configs
import knex from './configs/db.config';
import appConfig from './configs/app.config';

// Routes
import ResidentRoutes from './routes/resident.route';
import AuthRoutes from './routes/authentication.route';

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

// use express router
app.use('/api/v1', router);
router.use('/resident', ResidentRoutes);
router.use('/auth', AuthRoutes);

// use error handling
app.use(errorHandler);
app.use(notFoundHandler);

// listen server
const server = app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

function handleShutdownGracefully() {
  console.info("closing server gracefully...");
  server.close(() => {
      console.info("server closed.");
      // close db connections
      knex.destroy();
      process.exit(0);
  });
}
process.on('uncaughtException', handleShutdownGracefully);
process.on("SIGINT", handleShutdownGracefully);
process.on("SIGTERM", handleShutdownGracefully);
process.on("SIGHUP", handleShutdownGracefully);