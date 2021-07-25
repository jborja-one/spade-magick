'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 */
		await queryInterface.bulkInsert(
			'Reviews',
			[
				{
					title: 'Greate Deck',
					description: 'Love this deck!',
					userId: 1,
					illusionId: 3,
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
		await queryInterface.bulkDelete('Reviews', null, {});
	},
};
