// Example migration file (migrations/<timestamp>-add_age_to_users.js)
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Floors', 'available', {
      type: Sequelize.BOOLEAN,
      
    });
  
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Floors', 'available');
   
   
  },
};
