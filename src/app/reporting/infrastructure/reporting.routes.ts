import { Router } from 'express'

import { validateCreateReporting } from './validations'

import { ReportService } from 'app/reporting/domain/interfaces'
import { validateRequest } from 'shared/middlewares/validateRequest'

import { generateSongRequest } from './reporting.controller'

const router = Router()

// We will pass the reporting service once we know more about the domain and the use cases
export const reportingRouter = (services: ReportService) => {
  /**
   * @api {post} /api/v1/reporting/generate Generate Song Request
   * @apiName generateSongRequest
   * @apiGroup Reporting
   * @apiVersion 1.0.0
   * @apiDescription Generate a song request
   * @apiParam {String} title Song title
   * @apiParam {Location} location Locations interface
   * @apiSuccess {Object} response
   * @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
   * {
   * "songId": "996b36be-1102-4791-a2b5-d9ef248f18c7",
   * "location": {
   *    "latitude": 10,
   *    "longitude": 11
   *    }
   * }
   */
  router.post(
    '/generate',
    validateCreateReporting,
    validateRequest(),
    generateSongRequest(services.generateSongReport)
  )

  return router
}
