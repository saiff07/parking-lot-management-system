'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('cars', 'entryTime', {
      type: Sequelize.DATE,
      allowNull: true, // or false, depending on your requirements
    });
    await queryInterface.addColumn('cars', 'exitTime', {
      type: Sequelize.DATE,
      allowNull: true, // or false, depending on your requirements
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('cars', 'entryTime');
    await queryInterface.removeColumn('cars', 'exitTime');
  },
};
