// Example migration file (migrations/<timestamp>-add_age_to_users.js)
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    
    await queryInterface.addColumn('Parking_Lots', 'hourRate', {
      type: Sequelize.INTEGER,
      defaultValue: 10
    });
    
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.removeColumn('Parking_Lots', 'hourRate');
   
  },
};
