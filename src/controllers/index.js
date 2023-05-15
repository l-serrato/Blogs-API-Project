const login = require('./login');
const createUser = require('./createUser');
const getUsers = require('./getUsers');
const getByUserId = require('./getByUserId');
const createCategory = require('./createCategory');
const getCategories = require('./getCategories');
const getBlogPosts = require('./getBlogPosts');
const getByBlogPostId = require('./getByBlogPostId');
const createBlogPost = require('./createPost');

module.exports = {
  login,
  createUser,
  getUsers,
  getByUserId,
  createCategory,
  getCategories,
  getBlogPosts,
  getByBlogPostId,
  createBlogPost,
};