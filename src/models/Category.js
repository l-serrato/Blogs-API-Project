module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
  'Category',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  },
);

Category.associate = (models) => {
  Category.hasMany(models.PostCategory,
    { foreignKey: 'id', as: 'category_id' });
};

  return Category;
};