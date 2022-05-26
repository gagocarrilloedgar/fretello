import httpStatus from 'http-status'

import { IS_PRODUCTION } from 'shared/config'

export const errorHandler = (err: any, _req: any, res: any) => {
  let { statusCode, message } = err
  if (IS_PRODUCTION && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR]
  }

  res.locals.errorMessage = err.message

  const response = {
    code: statusCode,
    message,
    ...(!IS_PRODUCTION && { stack: err.stack })
  }

  if (!IS_PRODUCTION) console.error(err)

  res.status(statusCode).send({ error: response })
}
