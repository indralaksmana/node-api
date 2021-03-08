// Modules
import Knex from 'knex';
import appConfig from './app.config'

// Initialize knex.
const knex = Knex({
  client: 'mysql',
  connection: {
    host: appConfig.db.host,
    user: appConfig.db.user,
    password: appConfig.db.password,
    database: appConfig.db.database
  },
  debug: true, // change this value to "true". If you want to enable debug mode.
  pool: {
    min: 1,
    max: 20,
    afterCreate: (conn: any, done: any) => {
      conn.query('SET time_zone="UTC";', (err: any)=>{
        if (err) {
          console.log(err)
        }
        done(err, conn)
      })
    }
  }
});

export default knex;