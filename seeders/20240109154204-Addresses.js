'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      try {
        // Insert addresses
        await queryInterface.bulkInsert(
          'Addresses',
          [
            {
              lineone: 'MG Road',
              linetwo: 'Apt 456',
              landmark: 'Market Area',
              userId: 1, // This should be a valid user ID from your Users seeder
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              lineone: 'Gandhinagar',
              linetwo: 'House 101',
              landmark: 'Gandhi Park',
              userId: 2, // Another valid user ID
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              lineone: 'Mukherjinagar',
              linetwo: 'Flat 104',
              landmark: 'Shopping Mall',
              userId: 1, // Same user as the first address for multiple addresses
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              lineone: 'Sarojini Nagar',
              linetwo: 'Room 5',
              landmark: 'City Center',
              userId: 3, // A different user
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            // Add more addresses as needed
          ],
          { transaction }
        );

        await transaction.commit();
      } catch (error) {
        await transaction.rollback();
        throw error;
      }
    });
  },

  down: async (queryInterface) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      try {
        // Delete data from Addresses
        await queryInterface.bulkDelete('Addresses', null, { transaction });

        await transaction.commit();
      } catch (error) {
        await transaction.rollback();
        throw error;
      }
    });
  },
};
