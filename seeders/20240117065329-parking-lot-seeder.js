'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      try {
        // Insert addresses
        await queryInterface.bulkInsert(
          'Parking_Lots',
          [
            {
              id: 1,
              parkingLotName: 'Rajhans',
              address: 'Naroda',
              zipcode: 382345,
              available: true,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 2,
              parkingLotName: 'Banana',
              address: 'Thaltej',
              zipcode: 380059,
              available: true,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 3,
              parkingLotName: 'PVR',
              address: 'Thaltej',
              zipcode: 380059,
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
        await queryInterface.bulkDelete('Parking_Lots', null, { transaction });

        await transaction.commit();
      } catch (error) {
        await transaction.rollback();
        throw error;
      }
    });
  },
};
