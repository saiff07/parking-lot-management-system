import { MESSAGES, CODES } from '../../utils/constants';
import { errorHandler } from '../../utils/errorHandler';
import jwt from 'jsonwebtoken';
import { pluck } from 'underscore';

export async function login(request, response) {
  try {
    const user = request.user.dataValues;
    user.roles = pluck(user.roles, 'id');
    delete user.password;

    // Generate a JWT token
    const token = jwt.sign(user, process.env.JWT_SECRECT, {
      expiresIn: process.env.JWT_EXPIRY,
    });
    return response.status(CODES.SUCCESS).send({
      success: true,
      message: MESSAGES.AUTH.SUCCESS,
      data: user,
      token: token,
    });
  } catch (error) {
    errorHandler(error, response);
  }
}
export async function test(request, response) {
  response.json({ message: 'You have access to this protected route!' })
}

export async function logout(request, response) {
  try {
    request.logout((err) => {
      if (err) {
        errorHandler(err, response);
      }
    });
    return response.status(CODES.SUCCESS).send({
      success: true,
      message: MESSAGES.AUTH.LOGOUT,
      token: '',
    });
  } catch (error) {
    errorHandler(error, response);
  }
}
