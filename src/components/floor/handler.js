import { MESSAGES, CODES } from '../../utils/constants';
import { errorHandler } from '../../utils/errorHandler';
import { Floor } from '../../../models/index';


export async function getFloors(request, response) {
    try {
        // const authenticatedUser = request.user[0].dataValues.id;
        // const authenticatedUser = request.user.id;
        // console.log("User", authenticatedUser);
        // console.log("Role Id",authenticatedUser.roleId);
        const list = await Floor.findAll({});
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

export async function addFloor(request, response) {
    try {
        const data = request.body;
        const newData = await Floor.create(data);

        return response.status(CODES.SUCCESS).send({
            // success: true,
            message: MESSAGES.AUTH.SUCCESS,
            data: newData,

        });
    } catch (error) {
        errorHandler(error, response);
    }
}

export async function updateFloor(request, response) {
    try {
        // const id = request.user.id;
        const id = request.params.id;
        const data = request.body;
        const updatedData = await Floor.update(data, {
            where: {
                id:id ,
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

