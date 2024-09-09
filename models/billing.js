'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Billing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Car, {
        foreignKey: 'numberPlate',
      });
    }
  }
  Billing.init({
    numberPlate: DataTypes.STRING,
    parkingLotId: DataTypes.INTEGER,
    entryTime: DataTypes.DATE,
    exitTime: DataTypes.DATE,
    bill: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Billing',
  });
  return Billing;
};