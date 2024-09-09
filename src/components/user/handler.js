import { MESSAGES, CODES } from '../../utils/constants';
import { errorHandler } from '../../utils/errorHandler';
import { Address, User } from '../../../models/index';

const bcrypt = require("bcrypt")
export async function add(request, response) {
  try {
    return response.status(CODES.SUCCESS).send({
      success: true,
      message: MESSAGES.HEALTH,
    });
  } catch (error) {
    errorHandler(error, response);
  }
}


//--------------------API--------------------------

export async function listUser(request, response) {
  try {

    const listUser = await User.findAll({});

    console.log(listUser);
    return response.status(CODES.SUCCESS).send({
      success: true,
      message: MESSAGES.AUTH.SUCCESS,
      data: listUser,
    });

  }
  catch (error) {
    errorHandler(error, response);
  }
}

// -----------------------By ID-------------------------
export async function getUsers(request, response) {
  try {

    const getUser = await User.findAll({
      where: {
        id: request.params.id,
      }
    });

    console.log(getUsers);
    return response.status(CODES.SUCCESS).send({
      success: true,
      message: MESSAGES.AUTH.SUCCESS,
      data: getUser,
    });

  }
  catch (error) {
    errorHandler(error, response);
  }
}

export async function addNewUser(request, response) {
  try {
    const data = await request.body;
    const userData = await User.create(data);

    return response.status(CODES.SUCCESS).send({
      success: true,
      message: MESSAGES.AUTH.SUCCESS,
      data: userData,

    });
  } catch (error) {
    errorHandler(error, response);
  }
}

export async function updateUser(request, response) {
  try {
    const userID = request.params.id;
    const data = request.body;


    const updatedUser = await User.update(data, {
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


export async function login(req, res) {

  let response = 'login API';
  const data = req.body.email;
  var result = await User.findOne({
    where: { email: data },
  });
  var match = await bcrypt.compare(req.body.password, result.password);

  console.log(result.password)
  console.log(match)
  // if (match) {
  //   let params = { email: result.email, firstName: result.firstName };
  //   var token = await jwt.sign(params, process.env.secretkey, { expiresIn: '300s' }); // expires In "10h" "200" 1000 "35"
  // }
  // console.log(User.body)
  return res.status(CODES.SUCCESS).json({
    success: true,
    message: MESSAGES.AUTH.SUCCESS,
    // token: token
  })
}




