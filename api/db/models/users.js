'use strict';

const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    email: DataTypes.STRING,
    // role_id: DataTypes.INTEGER,
    // contact_id: DataTypes.INTEGER,
    // address_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    // freezeTableName: true,
        // instanceMethods: {
        //     generateHash(password) {
        //         return bcrypt.hash(password, bcrypt.genSaltSync(8));
        //     },
        //     validPassword(password) {
        //         return bcrypt.compare(password, this.password);
        //     }
        // }
  });
  Users.associate = function(models) {
    // associations can be defined here
    // Users.hasOne(models.role, {as: 'Role', foreignKey: 'id'});
  };
  return Users;
};