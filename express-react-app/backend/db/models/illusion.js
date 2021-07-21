'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Illusion extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Illusion.belongsTo(models.Category, { foreignKey: 'id' });
			Illusion.belongsTo(models.User, { foreignKey: 'userId' });
		}
	}
	Illusion.init(
		{
			image: DataTypes.STRING,
			title: DataTypes.STRING,
			description: DataTypes.TEXT,
			steps: DataTypes.TEXT,
			userId: DataTypes.INTEGER,
			categoryId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Illusion',
		}
	);
	return Illusion;
};
