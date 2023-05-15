const Joi = require('joi');
const { PostService } = require('../services');

const validateBody = (body) =>
  
  Joi.object({
    title: Joi.string().min(1).required().messages({
      'string.required': 'Some required fields are missing',
    }),
    content: Joi.string().min(1).required()
    .messages({
      'string.required': 'Some required fields are missing',
    }),
    categoryIds: Joi.array().min(1).required()
    .messages({
      'string.required': 'Some required fields are missing',
    }),
    image: Joi.string(),
  }).validate(body);

module.exports = async (req, res, next) => {
  const { error } = validateBody(req.body);
  try {
    if (error) return next(error);
    const { title, content, categoryIds } = req.body;
    const catId = await PostService.findOne([categoryIds]);
    if (!catId) { return res.status(400).json({ message: 'one or more "categoryIds" not found' }); }
    const post = await PostService.createBlogPost({ title, content, categoryIds });

    res.status(201).json({ post });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao salvar postagem no banco' });
  }
};