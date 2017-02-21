module.exports = function post(sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    content: DataTypes.STRING,
    title: DataTypes.STRING,
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  });

  return Post;
};
