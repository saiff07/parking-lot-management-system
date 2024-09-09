'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });

      // this.belongsTo(models.User_Role, {
      //   foreignKey: 'userId',
      // })
      
    }
  }
  Address.init({
    lineOne: DataTypes.STRING,
    lineTwo: DataTypes.STRING,
    landmark: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};





// ------------------------Parking Lot------------------
// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Parking_Lot extends Model {
  
//     static associate(models) {
//       // define association here
//       this.belongsTo(models.User, {
//         foreignKey: 'userId',
//       });

//       // this.belongsTo(models.User_Role, {
//       //   foreignKey: 'userId',
//       // })
      
//     }
//   }
//   Parking_Lot.init({
//     parkingLotName: DataTypes.STRING,
//     address: DataTypes.STRING,
//     zipCode: DataTypes.INTEGER,
//     totalCapacity: DataTypes.INTEGER,
//     currentCapacity: DataTypes.INTEGER,
//   }, {
//     sequelize,
//     modelName: 'Parking_Lot',
//   });
//   return Parking_Lot;
// };

// //------------- Block--------------
// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Block extends Model {
  
//     static associate(models) {
//       // define association here
//     //   this.belongsTo(models.User, {
//     //     foreignKey: 'userId',
//     //   });

//       // this.belongsTo(models.User_Role, {
//       //   foreignKey: 'userId',
//       // })
      
//     }
//   }
//   Block.init({
//     parkingLotId: DataTypes.STRING,
//     totalCapacity: DataTypes.INTEGER,
//     currentCapacity: DataTypes.INTEGER,
//   }, {
//     sequelize,
//     modelName: 'Block',
//   });
//   return Block;
// };