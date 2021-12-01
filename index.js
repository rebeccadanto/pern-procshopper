require('dotenv').config()
const express = require('express')
const cors = require("cors")
const app = express();
const path = require("path");

const usersRoute = require("./routes/users")
const transactionsRoute = require("./routes/transaction")

app.use(cors())
app.use(express.json())

app.use("/users", usersRoute);
app.use("/transactions", transactionsRoute);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "frontend/build")));
}

app.get("/", (req,res)=> res.send("Welcome to ProcShopper api"))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/build/index.html"));
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`APP running on port ${PORT}`))
