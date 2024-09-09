'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      try {
        // Insert addresses
        await queryInterface.bulkInsert(
          'Floors',
          [
            {
              id: 1,
              blockId: 1,
              floorNumber: 1,
              totalCapacity: 20,
              currentCapacity: 0,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 2,
              blockId: 2,
              floorNumber: 1,
              totalCapacity: 30,
              currentCapacity: 0,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 3,
              blockId: 3,
              floorNumber: 1,
              totalCapacity: 15,
              currentCapacity: 0,
              createdAt: new Date(),
              updatedAt: new Date(),
            },


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
        await queryInterface.bulkDelete('Floors', null, { transaction });

        await transaction.commit();
      } catch (error) {
        await transaction.rollback();
        throw error;
      }
    });
  },
};
