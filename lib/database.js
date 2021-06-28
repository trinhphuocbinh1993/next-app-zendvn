const Pool = require("pg").Pool;

let pool = new Pool();
console.log("env", process.env.NODE_ENV);
console.log(process.env.NEXT_PUBLIC_DOMAIN);
console.log(process.env.DATABASE_URL);

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
