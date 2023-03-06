require('dotenv').config();

module.exports =


{
  "development": {
    "username" : process.env.DBD_USERNAME,
    "password" : process.env.DBDD_PASSWORD,
    "database" : process.env.DBD_DATABASE,
    "host"     : process.env.DBD_HOST ,
    "dialect"  : process.env.DBD_DIALECT,
    "port"     : process.env.DBD_PORT
  },

  "test": {
    "username": process.env.DBT_USERNAME,
    "password": process.env.DBT_PASSWORD,
    "database": process.env.DBT_DATABASE,
    "host":     process.env.DBT_HOST,
    "dialect":  process.env.DBT_DIALECT,
    "port"     : process.env.DBT_PORT
  },
  "production": {
    "username": process.env.DBP_USERNAME,
    "password": process.env.DBP_PASSWORD,
    "database": process.env.DBP_DATABASE,
    "host":     process.env.DBP_HOST,
    "dialect":  process.env.DBP_DIALECT,
    "port"     : process.env.DBP_PORT
  }
}

