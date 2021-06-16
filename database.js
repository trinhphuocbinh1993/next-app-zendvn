import fs from "fs";
const Pool = require("pg").Pool;
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const pool = new Pool();

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
  // pool = new Pool({
  //   user: process.env.DB_USER,
  //   host: process.env.DB_HOST,
  //   database: process.env.DB_DATABASE,
  //   password: process.env.DB_PASSWORD,
  //   port: process.env.DB_PORT,
  //   ssl: {
  //     rejectUnauthorized: true,
  //     ca: fs.readFileSync('ca-certificate.crt').toString(),
  //   },
  // });
}

module.exports = pool;
