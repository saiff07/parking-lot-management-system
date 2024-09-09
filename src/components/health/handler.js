import { MESSAGES, CODES } from '../../utils/constants';
import { errorHandler } from '../../utils/errorHandler';

export async function check(request, response) {
  try {
    return response.status(CODES.SUCCESS).send({
      success: true,
      message: MESSAGES.HEALTH.CHECK,
    });
  } catch (error) {
    errorHandler(error);
  }
}
