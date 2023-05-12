const { BlogPost, User, Category } = require('../models');

const createBlogPost = ({ title, content, categoryIds }) => BlogPost
.create({ title, content, categoryIds });

const getBlogPosts = () => BlogPost
.findAll({ include: [{ model: User, as: 'user_id' }, { model: Category, as: 'categories' }] });

const getByBlogPostId = (id) => BlogPost.findOne({
  where: { id },
  include: [{ model: User, as: 'user_id' }, { model: Category, as: 'categories' }],
});

module.exports = {
  createBlogPost,
  getBlogPosts,
  getByBlogPostId,
};