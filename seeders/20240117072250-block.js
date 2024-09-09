'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      try {
        // Insert addresses
        await queryInterface.bulkInsert(
          'Blocks',
          [
            {
              id: 1,
              parkingLotId: 1,
              blockName: 'A',
              available: true,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 2,
              parkingLotId: 2,
              blockName: 'A',
              available: true,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 3,
              parkingLotId: 1,
              blockName: 'B',
              available: true,
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
        await queryInterface.bulkDelete('Blocks', null, { transaction });

        await transaction.commit();
      } catch (error) {
        await transaction.rollback();
        throw error;
      }
    });
  },
};
