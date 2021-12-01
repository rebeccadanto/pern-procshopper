const sqlPool = require("../db/sqlPool");
const { v4: uuid } = require("uuid");

module.exports = {
  addTransaction: async (req, res) => {
    const { cvc, expiry, number, name, total, userId, scans } = req.body;
    try {
      const pool = await sqlPool;
      const id = uuid();
      await pool.query(`insert into transactions (id, cvc, expiry, number, name, total, userId, scans)
                    values ('${id}', '${cvc}', '${expiry}', '${number}', '${name}', '${total}', '${userId}', '${scans}')
            `);
      res.send({ message: "Transaction completed Successfully" });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: "Internal Server Error" });
    }

    res.send("hjfhjfhjfh");
  },
  getTransactions: async (req, res) => {
    try {
      const pool = await sqlPool;
      const result = await pool.query(`select * from transactions`);
      res.send({ transactions: result.rows });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
  getMyTransactions: async (req, res) => {
    const {id} = req.params;
    try {
      const pool = await sqlPool;
      const result = await pool.query(`select * from transactions where userId='${id}'`);
      res.send({ transactions: result.rows });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
};
