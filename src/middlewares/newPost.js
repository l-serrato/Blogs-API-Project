const { Category } = require('../models');

const validateCategories = async (categoryIds) => {
  const result = await Category.findAll();
  const categories = result.map(({ dataValues }) => dataValues.id);
  for (let index = 0; index < categoryIds.length; index += 1) {
    const id = categoryIds[index];
    const test = categories.find((c) => c === id);
    if (!test) return undefined;
  }
  return true;
};

const newPostValidate = async (req, res, next) => {
  const post = req.body;
  const postArr = Object.values(post);
  const invalid = postArr.some((item) => item === '' || !item) || postArr.length < 3;
  if (invalid) return res.status(400).json({ message: 'Some required fields are missing' });
  if (post.categoryIds.length === 0) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  const valid = await validateCategories(post.categoryIds);
  if (!valid) return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  next();
};

module.exports = {
  newPostValidate,
};