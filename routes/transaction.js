const router = require("express").Router()

const {addTransaction, getTransactions, getMyTransactions} = require("../controllers/transaction") 
const schemaValidator = require("../middleware/userSchemaValidator")
const {transactionSchema} = require("../schemas")


router.post("/", schemaValidator(transactionSchema), addTransaction)
router.get("/", getTransactions)
router.get("/:id", getMyTransactions)

module.exports = router;