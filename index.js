require('dotenv').config()
const express = require('express')
const cors = require("cors")
const app = express();

const usersRoute = require("./routes/users")
const transactionsRoute = require("./routes/transaction")

app.use(cors())
app.use(express.json())

app.use("/users", usersRoute);
app.use("/transactions", transactionsRoute);

app.get("/", (req,res)=> res.send("Welcome to proc shopper api"))


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`APP running on port ${PORT}`))
