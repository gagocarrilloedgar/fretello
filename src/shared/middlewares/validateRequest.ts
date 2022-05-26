import { Response, Request, NextFunction } from 'express'
import { validationResult } from 'express-validator'

import { catchAsync } from 'shared/utils'

export const validateRequest = () =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)

    if (errors.isEmpty()) return next()

    res.status(400).json({ errors: errors.array() })
  })
