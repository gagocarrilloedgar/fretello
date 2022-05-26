import httpStatus from 'http-status'

import { ApiError } from 'shared/config'

/**
 * Error converter
 * @param {Error} err
 * @param {Request} _req
 * @param {Response} _res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 * @private
 * @function errorConverter
 * @memberof middlewares
 * @example
 */
export const errorConverter = (
  err: any,
  _req: any,
  _res: any,
  next: any
): void => {
  let error = err
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode
      ? httpStatus.BAD_REQUEST
      : httpStatus.INTERNAL_SERVER_ERROR
    const message = error.message || httpStatus[statusCode]
    error = new ApiError(statusCode, message as string, true, err.stack)
  }
  next(error)
}
