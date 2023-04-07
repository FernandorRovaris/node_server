const pgp = require("pg-promise")();

const db = pgp ({
    user: "postgres",
    password: "Odnanref321",
    host: "127.0.0.1",
    port: 5432,
    database: "doarse"
    
});

module.exports = db;

