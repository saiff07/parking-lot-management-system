export const MESSAGES = {
  HEALTH: {
    CHECK: 'Server is listening...',
  },
  AUTH: {
    SUCCESS: 'Authentication Successfull',
    LOGOUT: 'Logout Successfull',
  },
  ACCESS_MESSAGE: {
    SUCCESS: 'Access Granted',
    FAILED: 'Unauthorised Access'
  },
  CAR: {
    FETCH: "Car details fetched successfully"
  },
  FLOOR: {
    FETCH: "Floor details fetched successfully"
  },
  BLOCK: {
    FETCH: "Block details fetched successfully"
  },
  PARKING_LOT: {
    FETCH: "Parking-lot details fetched successfully"
  }
};

export const CODES = {
  SUCCESS: 200,
  CREATED: 201,
  SUCCESS_WITHOUT_ENTITY: 204,
  BAD_REQUEST: 400,
  VALIDATION_FAILED: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  SOMETHING_WENT_WRONG: 412,
};
