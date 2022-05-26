import { Response, Request, NextFunction } from 'express'
import httpStatus from 'http-status'

import { catchAsync } from 'src/shared/utils'

// here we will pass the service
const generateSongRequest = () =>
  catchAsync(async (_req: Request, res: Response, _next: NextFunction) => {
    res.status(httpStatus.OK).send({ message: 'To be defined' })
  })

export { generateSongRequest }
