//const cors = require("cors");
const pool = require("../../database");

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { email } = req.body;

      const newEmail = await pool.query(
        "INSERT INTO test(email) VALUES ($1) RETURNING *",
        [email]
      );
      res.status(201).json({
        data: newEmail.rows[0],
        message: "Submitted a form successfully!",
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
