//const cors = require("cors");
const pool = require("../../lib/database");
//import Cors from "cors";
// Initializing the cors middleware
// const cors = Cors({
//   methods: ["GET", "HEAD"],
// });

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
// function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }

//       return resolve(result);
//     });
//   });
// }

export default async (req, res) => {
  //await runMiddleware(req, res, cors);

  if (req.method === "POST") {
    try {
      const { email } = req.body;
      console.log("day la email", email);
      const newEmail = await pool.query(
        "INSERT INTO test(email) VALUES ($1) RETURNING *",
        [email]
      );
    //   res.setHeader(
    //     "Cache-Control",
    //     "public, max-age=0, stale-while-revalidate=1"
    //   );
      console.log("data here", newEmail.rows[0]);
      res.status(201).json({
        data: newEmail.rows[0],
        message: "Submitted a form successfully!",
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
