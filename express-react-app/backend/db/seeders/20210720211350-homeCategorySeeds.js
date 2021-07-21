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
					image: 'https://www.magicbymio.com/wp-content/uploads/2014/10/magiccards.jpg',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 2,
					title: 'Stage Magic',
					image: 'https://christopherhowell.net/vaudeville-magic-show-norvil-and-josephine.jpg',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 3,
					title: 'Mentalism',
					image: 'https://lh3.googleusercontent.com/proxy/ZfQwlqYn2c9AkEXOOZ3Qu_sde3LDSqG5dZ_TMQGlmtnFxUIBVi62-5PThz7rzPqcR5Q19QIuvbWPyj0rJQukZERPN31goyqO',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 4,
					title: 'Street Magic',
					image: 'https://theplaidzebra.com/wp-content/uploads/2014/10/Life-of-a-Street-Magician_Plaid-Zebra.jpg',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 5,
					title: 'Comedy Magic',
					image: 'http://www.funnyeddie.com/wp-content/gallery/gallery_img/c2.jpg',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 6,
					title: 'Pick Pocket Fun',
					image: 'https://s1.narvii.com/image/vdq7umlsshehmwpf5atlawk2pvot7m5m_hq.jpg',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 7,
					title: 'Bizzare',
					image: 'https://i.pinimg.com/originals/fd/d4/94/fdd494e57380f3095cae53341ff47550.jpg',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 8,
					title: 'Props',
					image: 'https://cdn.pixabay.com/photo/2017/02/02/23/36/cube-2034149_1280.jpg',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 9,
					title: 'Other',
					image: 'https://www.thedad.com/wp-content/uploads/2020/06/magic-tricks.jpg',
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
