const {Pool} = require('pg')

const pool = new Pool({
    user: "postgres",
    host:"database-procshopper.c3ybfrzza2v5.us-east-2.rds.amazonaws.com",
    database:"procshopper",
    password: "0616fugus",
    port: 5432
})

module.exports = pool;


