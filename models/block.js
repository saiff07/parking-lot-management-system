'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Block extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Floor, {
        foreignKey: 'blockId',
      });
      this.belongsTo(models.Parking_Lot, {
        foreignKey: 'parkingLotId',
      });
    }
  }
  Block.init({
    parkingLotId: DataTypes.INTEGER,
    blockName: DataTypes.STRING,
    available:{
      type : DataTypes.BOOLEAN,
      defaultValue : true,
    },
    total_Capacity: {
      type : DataTypes.INTEGER,
      defaultValue : 500,
    },
    current_Capacity: {
      type : DataTypes.INTEGER,
      defaultValue : 0,
    },

  }, {
    sequelize,
    modelName: 'Block',
      // hooks: {
      //   beforeCreate: async (block, options) => {
      //     const parking_lot = await block.getParking_Lot();
      //     const availableSpace = parking_lot.total_Capacity - parking_lot.current_Capacity;
      //     if (availableSpace <= 0) {
      //       throw new Error('Insufficient space in Parking_Lot for the new Block');
      //     }
      //   },
  
      //   afterCreate: async (block, options) => {
  
      //     const parkingLot = await block.getParking_Lot();
  
      //     await parkingLot.increment('current_Capacity', { by: 500 });
      //     await parkingLot.reload();
  
      //     if (parkingLot.current_Capacity === parkingLot.total_Capacity) {
      //       await parkingLot.update({ available: false });
      //     }
      //   }
      // }
    
  });

  return Block;
};