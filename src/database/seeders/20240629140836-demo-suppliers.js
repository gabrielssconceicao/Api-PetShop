'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Suppliers',
      [
        {
          company: 'Company 1',
          email: '5TqZk@example.com',
          category: 'food',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          company: 'Company 2',
          email: '35dk@example.com',
          category: 'food',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Suppliers', null, {});
  },
};
