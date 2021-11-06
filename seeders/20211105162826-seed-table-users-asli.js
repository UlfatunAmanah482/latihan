'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        fullname: 'Ulfa',
        email: 'ulfa@gmail.com',
        password: '$2a$12$pBS4h.HkEaXf2a2XJQrIDOBobGKvcy.ENLImhDrvnQ/SfckYO2vC6'
      },
      {
        id: 2,
        fullname: 'Anna',
        email: 'anna@gmail.com',
        password: '$2a$12$uYG1col0Cvrzr1/MwBeR.u/fxoXx7LWB8TLA8FpHcjiudok/Y5MCS'
      },
      {
        id: 3,
        fullname: 'Alya',
        email: 'alya@gmail.com',
        password: '$2a$12$uYG1col0Cvrzr1/MwBeR.u/fxoXx7LWB8TLA8FpHcjiudok/Y5MCS'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
