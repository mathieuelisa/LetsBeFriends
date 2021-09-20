const {Pool} = require('pg');

const pool = new Pool({
    connectionString: process.env.PGDATABASE
});

pool.connect();

module.exports = pool;