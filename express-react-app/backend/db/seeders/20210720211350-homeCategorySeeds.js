'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 */
		await queryInterface.bulkInsert(
			'Categories',
			[
				{
					id: 1,
					title: 'Close Up Magic',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 2,
					title: 'Stage Magic',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 3,
					title: 'Mentalism',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 4,
					title: 'Street Magic',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 5,
					title: 'Comedy Magic',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 6,
					title: 'Pick Pocket Fun',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 7,
					title: 'Bizzare',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 8,
					title: 'Other',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 */
		await queryInterface.bulkDelete('Categories', null, {});
	},
};
