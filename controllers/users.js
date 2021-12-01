const sqlPool = require("../db/sqlPool");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcrypt");

module.exports = {
  registerController: async (req, res) => {
    try {
      const pool = await sqlPool;
      const { firstname, role, lastname, email, insurance, phone, password } =
        req.body;
      const { rows } = await pool.query(
        `select * from users where email = '${email}'`
      );
      if (rows[0]) {
        return res.status(400).send({ message: "Email Account Exists" });
      }

      const id = uuid();
      const salt = await bcrypt.genSalt(10);
      const encrypted_pass = await bcrypt.hash(password, salt);

      await pool.query(`insert into users (id, firstname, lastname, email, insurance, phone, password, role)
                    values ('${id}', '${firstname}', '${lastname}', '${email}', '${insurance}', '${phone}', '${encrypted_pass}', 'user')
            `);

      const result = await pool.query(`select * from users where id = '${id}'`);

      res.send({ message: "Registered Successfully", user: result.rows[0] });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
  loginController: async (req, res) => {
    try {
      const pool = await sqlPool;
      const { email, password } = req.body;
      const { rows } = await pool.query(
        `select * from users where email = '${email}'`
      );
      const user = rows[0];
      if (!user) return res.status(400).send({ message: "Invalid credentials" });

      const validPass = await bcrypt.compare(password, user.password);
      if (!validPass) return res.status(400).send({ message: "Invalid email or password" });

      res.send({ message: "Login Successfully", user });

    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
};
