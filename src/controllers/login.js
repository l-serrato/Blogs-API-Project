const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validateBody = (body) =>
  Joi.object({
    username: Joi.string().min(5).alphanum().required()
    .messages({
      'string.required': 'Some required fields are missing',
    }),
    password: Joi.string().min(5).required().messages({
      'string.required': 'Some required fields are missing',
    }),
  }).validate(body);

module.exports = async (req, res, next) => {
  const { error } = validateBody(req.body);

  if (error) return next(error);
  
  const payload = {
    username: req.body.username,
    admin: false,
  };
  
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });
  
  res.status(200).json({ token });
};
