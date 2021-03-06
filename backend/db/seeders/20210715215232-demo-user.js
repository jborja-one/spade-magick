'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Users',
			[
				{
					firstName: 'Demo',
					lastName: 'lition',
					userName: 'Demo-lition',
					email: 'demo@user.io',
					hashedPassword: bcrypt.hashSync('password'),
				},
				{
					firstName: 'Fake',
					lastName: 'userone',
					userName: 'FakeUser1',
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync('password'),
				},
				{
					firstName: 'Fake',
					lastName: 'usertwo',
					userName: 'FakeUser2',
					email: faker.internet.email(),
					hashedPassword: bcrypt.hashSync('password'),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete(
			'Users',
			{
				userName: {
					[Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'],
				},
			},
			{}
		);
	},
};
