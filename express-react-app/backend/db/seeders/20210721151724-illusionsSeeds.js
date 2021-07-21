'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 */
		await queryInterface.bulkInsert(
			'Illusion',
			[
				{
					id: 1,
					image: 'https://www.murphysmagicsupplies.com/images/65130-full.png',
					title: 'Cups and Balls',
					description:
						'Starting with three cups set down in a line with three balls visible, one of the balls is put on top of the centre cup and the other two cups nested above. With a tap of the wand, the three cups are lifted, revealing that the ball has "penetrated" the cup. Again the cups are set in a line, the middle cup covering the ball which has already penetrated. Another of the visible balls is placed on top of the centre cup and covered with the other two cups, the cups being tapped and lifted to show the second ball has penetrated. This is repeated with the third ball.',
					steps: '',
					userId: 1,
					categoryId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 2,
					image: 'https://www.leeasher.com/img/product-images/catch-33-three-card-monte.jpg',
					title: 'Three Card Monte',
					description:
						'The Three-card Monte game is simple. To play, a dealer places three cards face down on a table, usually on a cardboard box which provides the ability to set up and disappear quickly.[4] The dealer shows that one of the cards is the target card, e.g., the queen of hearts, and then rearranges the cards quickly to confuse the player about which card is which. The player is then given an opportunity to select one of the three cards. If the player correctly identifies the target card, the player gets the amount bet (the "stake") back, plus the same amount again; otherwise, the stake is lost.',
					steps: 'To let the person your fooling think they are good at this game, show the picked up cards to the audience. drop the winner in the right hand onto the table then drop the looser in the left hand onto the table, both face down! Then throw the last looser down on the table also face down. Throw all the cards in a row. Do this slowly so the person thinks the game is easy. They should know where the winner is and pick the right card. Hold the cards normally. Show them to the audience and instead of dropping the winner on the table let the looser slide out between your thumb and 2nd finger onto the table first (all in your left hand). So now 1 card is on the table, people think it is a looser but it really the winner drop the rest of the cards normally this should be done quickly and effortlessly so the audience support nothing',
					userId: '2',
					categoryId: '1',
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
		await queryInterface.bulkDelete('Illusion', null, {});
	},
};
