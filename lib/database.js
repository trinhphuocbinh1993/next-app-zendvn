import fs from "fs";
const Pool = require("pg").Pool;
const path = require("path");
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

let pool = new Pool();
console.log("env", process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
}

module.exports = pool;
