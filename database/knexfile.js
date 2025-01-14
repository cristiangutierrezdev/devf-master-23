// Update with your config settings.
import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({path: '../.env'})
}

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      ssl: true,
      host: `${process.env.DB_HOST}`,
      database: `${process.env.DB_NAME}`,
      user:     `${process.env.DB_USER}`,
      password: `${process.env.DB_PASSWORD}`
    },
    pool:{
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
/*
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
*/  
/*
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
*/
};
