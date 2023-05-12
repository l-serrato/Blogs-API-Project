const { Category } = require('../models');

const createCategory = ({ name }) => Category
.create({ name });

const getCategorys = () => Category.findAll({ attributes: { exclude: ['password'] } });

const getByCategoryId = (id) => Category.findOne({
  where: { id },
  attributes: { exclude: ['password'] },
});

module.exports = {
  createCategory,
  getCategorys,
  getByCategoryId,
};