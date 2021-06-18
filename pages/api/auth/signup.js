const pool = require("../../../lib/database");
import { hashPassword } from "../../../lib/auth";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;
      //validation
      // + for email here
      const isEmailValid = validateEmail(email);
      const isEmailExists = typeof (await existsEmails(email));

      if (!isEmailValid) {
        return res.status(422).json({ message: "Email validation failed!" });
      }

      if (isEmailExists !== "undefined") {
        return res.status(409).json({ message: "Email already exists!" });
      }
      if (password.length <= 4) {
        return res.status(401).json({
          message: "Password length must be longer than 4 characters",
        });
      }

      // hashpassword here
      const hashedPassword = await hashPassword(password);

      if (isEmailValid && isEmailExists === "undefined") {
        const newUser = await pool.query(
          "INSERT INTO users(email, password) VALUES ($1, $2) RETURNING *",
          [email, hashedPassword]
        );
        res.status(201).json({
          data: newUser.rows[0],
          message: "Your account created successfully!",
        });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export async function existsEmails(email) {
  const existsEmails = await pool.query(
    "SELECT * FROM users WHERE email = ($1)",
    [email]
  );
  return existsEmails.rows[0];
}
