require('babel-register');
require('dotenv').config({path: __dirname + '/../.env'});

/**
 * Database configuration.
 */
module.exports = {
  client: process.env.DB_CLIENT,
  connection: {
    filename: process.env.DB_FILE,
  }
};
