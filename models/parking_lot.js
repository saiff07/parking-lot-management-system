'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parking_Lot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       
        this.hasMany(models.Block, {
          foreignKey: 'parkingLotId',
        });
    }
  }
  Parking_Lot.init({
    parkingLotName: DataTypes.STRING,
    address: DataTypes.STRING,
    zipCode: DataTypes.INTEGER,
    available:{
      type : DataTypes.BOOLEAN,
      defaultValue : true,
    },
    total_Capacity: {
      type : DataTypes.INTEGER,
      defaultValue : 1000,
    },
    current_Capacity: {
      type : DataTypes.INTEGER,
      defaultValue : 0,
    },
    price: DataTypes.INTEGER,
    hourRate: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Parking_Lot',
  
  });
  return Parking_Lot;
};