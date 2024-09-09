import {
  ValidationError,
  UniqueConstraintError,
  ForeignKeyConstraintError,
  DatabaseError,
} from 'sequelize';

export function errorHandler(err, res) {
  console.log(err);

  if (err instanceof ValidationError) {
    return res.status(400).json({
      status: 400,
      message: err.message,
      type: 'ValidationError',
      data: err.errors,
    });
  } else if (err instanceof UniqueConstraintError) {
    return res.status(409).json({
      status: 409,
      message: 'Conflict',
      type: 'UniqueConstraintError',
      data: {
        fields: err.fields,
        table: err.table,
      },
    });
  } else if (err instanceof ForeignKeyConstraintError) {
    return res.status(400).json({
      status: 400,
      message: 'Bad Request',
      type: 'ForeignKeyConstraintError',
      data: {
        fields: err.fields,
        table: err.table,
      },
    });
  } else if (err instanceof DatabaseError) {
    return res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
      type: 'DatabaseError',
      data: {},
    });
  } else {
    return res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
      type: 'UnknownError',
      data: {},
    });
  }
}
