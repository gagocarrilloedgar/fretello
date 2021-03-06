import { Router } from 'express'
import httpStatus from 'http-status'

import reportServices from 'src/app/report'
import { reportingRouter } from 'src/app/report/infrastructure'

const router = Router()

export default () => {
  router.use('/reporting', reportingRouter(reportServices))
  router.use('/', (_req: any, res: any, _next: any) =>
    res.status(httpStatus.OK).send('Hello World')
  )
  return router
}
