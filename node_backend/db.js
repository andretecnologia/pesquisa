const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    database: 'endereco',
    password: 'postgres',
    port: 5432,
    host: 'localhost',
  })
  module.exports = { pool };