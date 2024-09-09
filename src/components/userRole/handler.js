import { MESSAGES, CODES } from '../../utils/constants';
import { errorHandler } from '../../utils/errorHandler';
// import { Address, User } from '../../../models/index';
import { User, User_Role, Address, Role } from '../../../models/index';




//--------------------API--------------------------

export async function listUserRole(request, response) {
    try {

        const listRole = await User_Role.findAll({});

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
export async function getUserRole(request, response) {
    try {
        const id = request.params.id;
        const getUserRole = await User_Role.findAll({
            where: {
                userId: id,
            }
        });

        console.log(getUserRole);
        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.AUTH.SUCCESS,
            data: getUserRole,
        });

    }
    catch (error) {
        errorHandler(error, response);
    }
}

export async function addNewUserRole(request, response) {
    try {
        const data = await request.body;
       
        const userData = await User_Role.create(data);

        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.AUTH.SUCCESS,
            data: userData,

        });
    } catch (error) {
        errorHandler(error, response);
    }
}

export async function updateUserRole(request, response) {
    try {
        const userID = request.params.id;
        const data = request.body;


        const updatedUser = await User_Role.update(data, {
            where: {
                id: userID,
            },
        });

        return response.status(CODES.SUCCESS).send({
            success: true,
            message: MESSAGES.AUTH.SUCCESS,
            data: updatedUser,


        });
    } catch (error) {
        errorHandler(error, response);
    }
}


// export async function login(req, res) {

//   let response = 'login API';
//   const data = req.body.email;
//   var result = await User.findOne({
//     where: { email: data },
//   });
//   var match = await bcrypt.compare(req.body.password, result.password);

//   console.log(result.password)
//   console.log(match)
//   // if (match) {
//   //   let params = { email: result.email, firstName: result.firstName };
//   //   var token = await jwt.sign(params, process.env.secretkey, { expiresIn: '300s' }); // expires In "10h" "200" 1000 "35"
//   // }
//   // console.log(User.body)
//   return res.status(CODES.SUCCESS).json({
//     success: true,
//     message: MESSAGES.AUTH.SUCCESS,
//     // token: token
//   })
// }



