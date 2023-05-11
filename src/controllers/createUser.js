const jwt = require('jsonwebtoken');
const Joi = require('joi');
const { UserService } = require('../services');

const secret = process.env.JWT_SECRET;

const validateBody = (body) =>
  
  Joi.object({
    displayName: Joi.string().min(8).required()
    .messages({
      'string.min': '"displayName" length must be 8 characters long',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': '"password" length must be 6 characters long',
    }),
    email: Joi.string().min(1).email().required()
    .messages({
      'string.email': '"email" must be a valid email',
    }),
    image: Joi.string(),
  }).validate(body);

module.exports = async (req, res, next) => {
  const { error } = validateBody(req.body);
  try {
    const { displayName, email, password, image } = req.body;
    const existing = await UserService.getByEmail(email);
    if (existing) { res.status(409).json({ message: 'User already registered' }); }
    const user = await UserService.createUser({ displayName, email, password, image });
    if (error) return next(error);
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

    res.status(201).json({ token });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco' });
  }
};