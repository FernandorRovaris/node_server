require('dotenv/config');
const pgp = require("pg-promise")();

const db = pgp ("postgres://doarse_user:fUXsU9DmpBfgbFSuFL6ut0YkY8t6vC0T@dpg-chjbmfndvk4opidf5pgg-a.ohio-postgres.render.com/doarse");

module.exports = db;

