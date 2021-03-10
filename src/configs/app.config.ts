// Modules
import * as dotenv from 'dotenv';

dotenv.config();

export default {
  port: parseInt(process.env.APP_PORT, 10),
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
  }
};