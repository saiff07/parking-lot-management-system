// Example migration file (migrations/<timestamp>-add_age_to_users.js)
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Parking_Lots', 'total_Capacity', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('Parking_Lots', 'current_Capacity', {
      type: Sequelize.INTEGER,
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Parking_Lot', 'total_Capacity');
    await queryInterface.removeColumn('Parking_Lot', 'current_Capacity');
   
  },
};
