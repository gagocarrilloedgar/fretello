import { Response, Request, NextFunction } from 'express'
import httpStatus from 'http-status'

import { catchAsync } from 'shared/utils'
import { ReportRequest } from 'app/report/domain/interfaces'

const generateSongRequest = (
  generateSongReport: (
    reportRequest: ReportRequest
  ) => Promise<{ success: string | null; error: string | null }>
) =>
  catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
    const body = req.body

    const report = await generateSongReport(body)

    if (report.error) return res.status(httpStatus.BAD_REQUEST).send(report.error)

    res.status(httpStatus.OK).send({ message: 'To be defined' })
  })

const getWeatherStatistics = (
  getWeatherStatisticData: (
    songId: string
  ) => Promise<{ success: string | null; error: string | null }>
) =>
  catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
    const { songId } = req.params
    const songStats = await getWeatherStatisticData(songId)
    if (songStats.error) return res.status(httpStatus.BAD_REQUEST).send(songStats.error)
    res.status(httpStatus.OK).send(songStats.success)
  })

export { generateSongRequest, getWeatherStatistics }
