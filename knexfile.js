'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/gamestore_dev'
    // connection: 'postgres://postgres:brownbear@localhost/knexwarmup_dev
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/gamestore_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
