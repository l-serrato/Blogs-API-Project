const sequelize = require('sequelize');
const { BlogPost, User, Category, PostCategory } = require('../models');

const createBlogPost = async ({ title, content, categoryIds }) => {
  const result = await sequelize.transaction(async (t) => {
    const post = await BlogPost.create({
      title, content, categoryIds,
    }, { transaction: t });

    await PostCategory.bulkCreate({
      categoryIds,
    }, { transaction: t });
    return post;
  });

  return result;
  
  /* BlogPost
.create({ title, content, categoryIds }); */
};

const getBlogPosts = () => BlogPost
.findAll({ include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
 { model: Category, as: 'categories', through: { attributes: [] } }] });

const getByBlogPostId = (id) => BlogPost.findOne({
  where: { id },
  include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
  { model: Category, as: 'categories', through: { attributes: [] } }],
});

module.exports = {
  createBlogPost,
  getBlogPosts,
  getByBlogPostId,
};