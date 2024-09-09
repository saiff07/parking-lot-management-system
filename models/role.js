'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      this.hasMany(models.User_Role, {
        foreignKey: 'roleId',
      });
      // this.belongsTo(models.User, {
      //   through: models.User_Role,
      //   foreignKey: 'userId',
      // });
    }
  }
  Role.init(
    {
      role: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Role',
    },
  );
  return Role;
};
