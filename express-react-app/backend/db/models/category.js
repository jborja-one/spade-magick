'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Category.init({
    closeUp: DataTypes.BOOLEAN,
    stage: DataTypes.BOOLEAN,
    mentalism: DataTypes.BOOLEAN,
    street: DataTypes.BOOLEAN,
    comedy: DataTypes.BOOLEAN,
    pickPocket: DataTypes.BOOLEAN,
    bizzre: DataTypes.BOOLEAN,
    other: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};