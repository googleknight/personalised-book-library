

module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    bookId: DataTypes.INTEGER,
    author: DataTypes.STRING,
    name: DataTypes.STRING,
    rating: DataTypes.REAL,
    islike: DataTypes.BOOLEAN,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return books;
};
