const router = require("express").Router()

const {loginController, registerController} = require("../controllers/users") 
const schemaValidator = require("../middleware/userSchemaValidator")
const {registerSchema, loginSchema} = require("../schemas")


router.post("/login", schemaValidator(loginSchema), loginController)
router.post("/register", schemaValidator(registerSchema), registerController)

module.exports = router;
