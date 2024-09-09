'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Floor, {
        foreignKey: 'floorId',
      });
      this.hasMany(models.Billing, {
        foreignKey: 'numberPlate',
      });
     
    }
  }
  Car.init({
    carName: DataTypes.STRING,
    carCompanyName: DataTypes.STRING,
    carColor: DataTypes.STRING,
    numberPlate: DataTypes.STRING,
    floorId: DataTypes.INTEGER,
    // entryTime:{ 
    //   type : DataTypes.DATE,
    //   defaultValue: new Date()
    // },
    // exitTime: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Car',
    hooks: {
      afterCreate: async (car, options) => {
        console.log("New car is added");

        const floor = await car.getFloor();
        await floor.increment('currentCapacity', { by: 1 });
        await floor.reload();
        
        const block = await floor.getBlock();
        await block.increment('current_capacity', { by: 1 });
        await block.reload();
      
        const parkingLot = await block.getParking_Lot();
        await parkingLot.increment('current_capacity', { by: 1 });
        await parkingLot.reload();
      },
      
      afterDestroy: async (car, options) => {
        console.log("Car entry is deleted");

        const floor = await car.getFloor();
        await floor.decrement('currentCapacity', { by: 1 });
        await floor.reload();
        
        const block = await floor.getBlock();
        await block.decrement('current_capacity', { by: 1 });
        await block.reload();
      
        const parkingLot = await block.getParking_Lot();
        await parkingLot.decrement('current_capacity', { by: 1 });
        await parkingLot.reload();
      },

    }
  });
 
  
  return Car;
};


////-----------------------------------------------------------------------------------------------------------/////


// // models/floor.js
// // Add the following hook in the Car model definition

