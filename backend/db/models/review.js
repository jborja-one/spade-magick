'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Review extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Review.belongsTo(models.Illusion, { foreignKey: 'id' });
			Review.belongsTo(models.User, { foreignKey: 'id' });
		}
	}
	Review.init(
		{
			description: DataTypes.TEXT,
			userId: DataTypes.INTEGER,
			illusionId: DataTypes.INTEGER,
			title: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Review',
		}
	);
	return Review;
};
