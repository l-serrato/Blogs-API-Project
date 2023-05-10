module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
  'BlogPost',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    displayName: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    underscored: true,
  },
);

BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User,
        { foreignKey: 'id', as: 'user_id' });

      BlogPost.hasMany(models.PostCategory,
        { foreignKey: 'id', as: 'post_id' });
    };

  return BlogPost;
};