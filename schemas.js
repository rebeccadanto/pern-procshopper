const Joi = require("joi");

module.exports = {
  loginSchema: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
  registerSchema: Joi.object().keys({
    email: Joi.string().email().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    phone: Joi.string().required(),
    insurance: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
  }),

  transactionSchema: Joi.object().keys({
    cvc: Joi.string().required(),
    expiry: Joi.string().required(),
    name: Joi.string().required(),
    number: Joi.string().required(),
    scans: Joi.string().required(),
    total: Joi.number().required(),
    userId: Joi.string().required(),
  }),
};
