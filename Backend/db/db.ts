// connect to our database

const Pool = require ('pg').Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "greece-facts",
    password: "password",
    port: "5432"
})

module.exports = pool;