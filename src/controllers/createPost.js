// const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { PostService } = require('../services');

/* const validateBody = (body) =>
  
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
  /*   const catId = await categoryIds.map((cats) => {
      categoryIds.findOne(cats);
      console.log(cats);
    return cats;
  });
    if (!catId) { return res.status(400).json({ message: 'one or more "categoryIds" not found' }); }
    const post = await PostService.createBlogPost({ title, content, categoryIds });

    return res.status(201).json({ post });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ message: 'Erro ao salvar postagem no banco' });
  }
}; */

const readToken = (token) => {
  try {
    const { payload } = jwt.decode(token, { complete: true });
    return payload;
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = async (req, res) => {
  const token = req.headers.authorization;
  const { title, content, userId, categoryIds } = req.body;
  const user = readToken(token);
  const posts = await PostService.createBlogPost({ title, content, userId, categoryIds, user });
  return res.status(201).json(posts);
};