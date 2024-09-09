'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Role extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });

      this.belongsTo(models.Role, {
        foreignKey: 'roleId',
      });

   
    }
  }
  User_Role.init(
    {
      userId: DataTypes.INTEGER,
      roleId: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User_Role',
    },
  );
  return User_Role;
};
