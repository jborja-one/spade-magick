'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Illusions', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			image: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			steps: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			userId: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			categoryId: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Illusions');
	},
};
