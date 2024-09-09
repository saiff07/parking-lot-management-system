import { MESSAGES, CODES } from '../../utils/constants';
import { errorHandler } from '../../utils/errorHandler';
import { Address, User, Role } from '../../../models/index';


export async function getAddress(request, response) {
    try {
        // const authenticatedUser = request.user[0].dataValues.id;
        const authenticatedUser = request.user.id;
        console.log("User", authenticatedUser);
        // console.log("Role Id",authenticatedUser.roleId);

        const addressData = await User.findAll({
            where: {
                id: authenticatedUser,
            },
            include: [
                {
                    model: Address,
                    // model: Role,

                },
            ],
        });

        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.AUTH.SUCCESS,
            data: addressData,
        });
    } catch (error) {
        errorHandler(error, response);
    }
}



export async function addNewAddress(request, response) {
    try {
        const data = request.body;
        const addressData = await Address.create(data);

        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.AUTH.SUCCESS,
            data: addressData,

        });
    } catch (error) {
        errorHandler(error, response);
    }
}


export async function updateAddress(request, response) {
    try {
        const addressId = request.user.id;
        const data = request.body;
        const updatedData = await Address.update(data, {
            where: {
                userId: addressId,
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





















