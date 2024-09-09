import { MESSAGES, CODES } from '../../utils/constants';
import { errorHandler } from '../../utils/errorHandler';
import { Parking_Lot } from '../../../models/index';


export async function getList(request, response) {
    try {
        // const authenticatedUser = request.user[0].dataValues.id;
        // const authenticatedUser = request.user.id;
        // console.log("User", authenticatedUser);
        // console.log("Role Id",authenticatedUser.roleId);
        const list = await Parking_Lot.findAll({});
        // const addressData = await User.findAll({
        //     where: {
        //         id: authenticatedUser,
        //     },
        //     include: [
        //         {
        //             model: Address,
        //             // model: Role,

        //         },
        //     ],
        // });

        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.AUTH.SUCCESS,
            data: list,
        });
    } catch (error) {
        errorHandler(error, response);
    }
}



export async function addNewList(request, response) {
    try {
        const data = request.body;
        const newData = await Parking_Lot.create(data);

        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.AUTH.SUCCESS,
            data: newData,

        });
    } catch (error) {
        errorHandler(error, response);
    }
}


export async function updateList(request, response) {
    try {
        // const id = request.user.id;
        const id = request.params.id;
        const data = request.body;
        const updatedData = await Parking_Lot.update(data, {
            where: {
                id: id,
            },
        });

        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.AUTH.SUCCESS,
            data: updatedData,

        });
    } catch (error) {
        errorHandler(error, response);
    }
}

export async function deleteAllData() {
    try {
      // Delete all data from the table
      await Parking_Lot.destroy({
        where: {}, // Empty where condition to delete all rows
      });
  
      console.log('Data deleted successfully.');
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }
  


