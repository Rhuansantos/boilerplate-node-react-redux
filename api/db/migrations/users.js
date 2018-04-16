'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // first_name:{
      //   allowNull: false,
      //   type: Sequelize.STRING
      // },
      // last_name:{
      //   allowNull: false,
      //   type: Sequelize.STRING
      // },
      // cpf:{
      //   type: Sequelize.STRING 
      // },
      username:{
        allowNull: false,
        type: Sequelize.STRING 
      },
      email: {
        type: Sequelize.STRING
      },
      password:{
        type: Sequelize.STRING
      },
      // gender:{
      //   type: Sequelize.STRING
      // },
      // role_id: {
      //   type: Sequelize.INTEGER,
      //   references: { model: 'role', key: 'id' }
      // },
      // contact_id: {
      //   type: Sequelize.INTEGER,
      //   references: { model: 'contacts', key: 'id' }
      // },
      // address_id: {
      //   type: Sequelize.INTEGER,
      //   references: { model: 'addresses', key: 'id' }
      // },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};