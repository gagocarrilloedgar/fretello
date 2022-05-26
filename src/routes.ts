import { Router } from 'express'
import httpStatus from 'http-status'

import { reportingRouter } from 'app/reporting/infrastructure'

const router = Router()

export default () => {
  router.use('/reporting', reportingRouter())
  router.use('/', (_req: any, res: any, _next: any) =>
    res.status(httpStatus.OK).send('Hello World')
  )
  return router
}