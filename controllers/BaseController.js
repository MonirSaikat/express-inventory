const knex = require('knex');

module.exports = class BaseController {
  constructor() {
    this.init();
  }

  async init() {
    const db = knex({
      client: 'mysql',
      connection: {
        host: 'localhost',
        port: 3306,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
      }
    });

    this.db = db;
  }
};
