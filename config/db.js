const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost', 
  database: 'HACSA', 
  password: 'mystrongpassword', 
  port: 5432
});

module.exports = pool;
