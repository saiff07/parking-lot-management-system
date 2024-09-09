import { MESSAGES, CODES } from '../../utils/constants';
import { errorHandler } from '../../utils/errorHandler';
// import { Address, User } from '../../../models/index';
import { Role } from '../../../models/index';



//--------------------API--------------------------

export async function listRole(request, response) {
    try {

        const listRole = await Role.findAll({});

        console.log(listRole);
        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.AUTH.SUCCESS,
            data: listRole,
        });

    }
    catch (error) {
        errorHandler(error, response);
    }
}

// -----------------------By ID-------------------------
export async function getRole(request, response) {
    try {

        const getRole = await Role.findAll({
            where: {
                id: request.params.id,
            }
        });

        console.log(getRole);
        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.AUTH.SUCCESS,
            data: getRole,
        });

    }
    catch (error) {
        errorHandler(error, response);
    }
}

export async function addNewRole(request, response) {
    try {
        const data = await request.body;
        const roleData = await Role.create(data);

        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.AUTH.SUCCESS,
            data: roleData,

        });
    } catch (error) {
        errorHandler(error, response);
    }
}

export async function updateRole(request, response) {
    try {
        const id = request.params.id;
        const data = request.body;


        const updatedRole = await Role.update(data, {
            where: {
                id: id,
            },
        });

        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.AUTH.SUCCESS,
            data: updatedRole,


        });
    } catch (error) {
        errorHandler(error, response);
    }
}





