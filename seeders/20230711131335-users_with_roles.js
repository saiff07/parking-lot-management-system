'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  up: async (queryInterface) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      try {
        // Insert users
        await queryInterface.bulkInsert(
          'Users',
          [
            {
              id: 1,
              fullName: 'Super Admin',
              email: 'superadmin@test.com',
              password:
                '$2b$10$cXpe68APg8BvZFeNxpQH2.3oSBLu7ESlILX/a4XhSvw/hj7BZNKLy',
              phone: '+911234567890',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 2,
              fullName: 'Test Manager',
              email: 'manager@test.com',
              password:
                '$2b$10$cXpe68APg8BvZFeNxpQH2.3oSBLu7ESlILX/a4XhSvw/hj7BZNKLy',
              phone: '+911234567891',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 3,
              fullName: 'Test Employee',
              email: 'employee@test.com',
              password:
                '$2b$10$cXpe68APg8BvZFeNxpQH2.3oSBLu7ESlILX/a4XhSvw/hj7BZNKLy',
              phone: '+911234567892',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 4,
              fullName: 'Test Customer',
              email: 'customer@test.com',
              password:
                '$2b$10$cXpe68APg8BvZFeNxpQH2.3oSBLu7ESlILX/a4XhSvw/hj7BZNKLy',
              phone: '+911234567893',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          { transaction },
        );

        // Insert roles
        await queryInterface.bulkInsert(
          'Roles',
          [
            {
              id: 1,
              role: 'super admin',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 2,
              role: 'manager',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 3,
              role: 'employee',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              id: 4,
              role: 'customer',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          { transaction },
        );

        // Create associations in Users_Roles
        await queryInterface.bulkInsert(
          'User_Roles',
          [
            {
              UserId: 1,
              RoleId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              UserId: 2,
              RoleId: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              UserId: 3,
              RoleId: 3,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            {
              UserId: 4,
              RoleId: 4,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          { transaction },
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
        // Delete data from Users_Roles
        await queryInterface.bulkDelete('Users_Roles', null, { transaction });

        // Delete data from Users and Roles
        await queryInterface.bulkDelete('Users', null, { transaction });
        await queryInterface.bulkDelete('Roles', null, { transaction });

        await transaction.commit();
      } catch (error) {
        await transaction.rollback();
        throw error;
      }
    });
  },
};
