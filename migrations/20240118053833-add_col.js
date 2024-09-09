// Example migration file (migrations/<timestamp>-add_age_to_users.js)
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Blocks', 'total_Capacity', {
      type: Sequelize.INTEGER,
      defaultValue: 15
    });
    await queryInterface.addColumn('Blocks', 'current_Capacity', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
    
    await queryInterface.addColumn('Parking_Lots', 'price', {
      type: Sequelize.INTEGER,
      defaultValue: 10
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Blocks', 'total_Capacity');
    await queryInterface.removeColumn('Blocks', 'current_Capacity');
    await queryInterface.removeColumn('Parking_Lots', 'price');
   
  },
};
