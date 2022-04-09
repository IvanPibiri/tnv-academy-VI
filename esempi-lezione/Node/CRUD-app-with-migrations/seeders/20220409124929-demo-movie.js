'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies', [{
      title: 'The Birth of a Nation',
      author: 'D. W. Griffith',
      year: 1915,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Nosferatu',
      author: 'F. W. Murnau',
      year: 1922,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
