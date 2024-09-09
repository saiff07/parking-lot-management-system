'use strict';
// import { hash } from 'bcrypt';
const bcrypt = require("bcrypt")
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsToMany(models.Role, {
        through: models.User_Role,
        as: 'roles',
      });

      this.hasMany(models.Address, {
        foreignKey: 'userId',
      })

    }
  }
  User.init(
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        set(value) {
          const saltRounds = 10;
          const hashedPassword = bcrypt.hashSync(value, saltRounds);
          this.setDataValue('password', hashedPassword);
        },
      },
      phone: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      // hooks: {
      //   beforeCreate: async (user) => {
      //     const saltRounds = 10;
      //     const hashedPassword = await hash(user.password, saltRounds);
      //     user.password = hashedPassword;
      //     //     // user.setDataValue('hashedPassword', hash); // use this instead
      //   },

      // },


    },
  );
  return User;
};
