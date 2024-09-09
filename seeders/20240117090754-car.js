'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      try {
        // Insert addresses
        await queryInterface.bulkInsert(
          'Cars',
          [
            {
              id: 1,
              carName: 'Phantom',
              carCompanyName: 'Rolls Royce',
              carColor: 'Maroon',
              numberPlate: 'GJ-01-VN-1234',
              floorId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 2,
              carName: 'S-Class',
              carCompanyName: 'Mercedes Maybach',
              carColor: 'White',
              numberPlate: 'GJ-01-SD-2534',
              floorId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 3,
              carName: 'S 650 Cabriolet:',
              carCompanyName: 'Mercedes Maybach',
              carColor: 'Black',
              numberPlate: 'GJ-01-CN-2284',
              floorId: 2,
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
        await queryInterface.bulkDelete('Cars', null, { transaction });

        await transaction.commit();
      } catch (error) {
        await transaction.rollback();
        throw error;
      }
    });
  },
};
