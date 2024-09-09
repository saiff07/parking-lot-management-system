'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Floor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Car, {
        foreignKey: 'floorId',
      });
      this.belongsTo(models.Block, {
        foreignKey: 'blockId',
      });
      
    }
  }
  Floor.init({
    blockId: DataTypes.INTEGER,
    floorNumber: DataTypes.INTEGER,
    totalCapacity: {
      type : DataTypes.INTEGER,
      defaultValue : 100,
    },
    currentCapacity: {
      type : DataTypes.INTEGER,
      defaultValue : 0,
    },
    available:{
      type : DataTypes.BOOLEAN,
      defaultValue : true,
    },
  }, {
    sequelize,
    modelName: 'Floor',
    // hooks: {
    //   afterCreate: async (floor, options) => {
    //     const block = await floor.getBlock();
    //     await block.increment('current_Capacity', { by: 100 });
    //     await block.reload();
    //     if (block.current_Capacity === block.total_Capacity) {
    //       await block.update({ available: false });
    //     }
    //   },

    //   beforeCreate: async (floor, options) => {
    //     const block = await floor.getBlock();
    //     const availableSpace = block.total_Capacity - block.current_Capacity;
    //     if (availableSpace <= 0) {
    //       throw new Error('Insufficient space in the Block for the new Floor');
    //     }
    //   }
    // }
  });
  // models/car.js

// Car.addHook('afterCreate', async (car, options) => {
//   // Increment current capacity in Floor
//   const floor = await car.getFloor();
//   floor.currentCapacity += 1;
//   await floor.save();

//   // Recursively update total capacity in Block and ParkingLot
//   const block = await floor.getBlock();
//   const parkingLot = await block.getParkingLot();

 
// })

  return Floor;
};