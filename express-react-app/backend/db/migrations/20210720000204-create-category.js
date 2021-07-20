'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      closeUp: {
        type: Sequelize.BOOLEAN
      },
      stage: {
        type: Sequelize.BOOLEAN
      },
      mentalism: {
        type: Sequelize.BOOLEAN
      },
      street: {
        type: Sequelize.BOOLEAN
      },
      comedy: {
        type: Sequelize.BOOLEAN
      },
      pickPocket: {
        type: Sequelize.BOOLEAN
      },
      bizzre: {
        type: Sequelize.BOOLEAN
      },
      other: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Categories');
  }
};