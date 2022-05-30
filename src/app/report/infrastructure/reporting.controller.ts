import { Response, Request, NextFunction } from 'express'
import httpStatus from 'http-status'

import { catchAsync } from 'shared/utils'
import { Location, ReportRequest, SongStatistics, SongWeather } from 'app/report/domain/interfaces'

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
    songId: string,
    queryWeatherByLocation: (location: Location) => Promise<SongWeather | null>
  ) => Promise<{ success: SongStatistics[] | null; error: string | null }>,
  queryWeatherByLocation: (location: Location) => Promise<SongWeather | null>
) =>
  catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
    const { songId } = req.params
    const songStats = await getWeatherStatisticData(songId, queryWeatherByLocation)
    if (songStats.error) return res.status(httpStatus.BAD_REQUEST).send(songStats.error)
    res.status(httpStatus.OK).send(songStats.success)
  })

const getLongestStreak = (
  computeLongestStreak: (
    songId: string,
    userId: string
  ) => Promise<{ success: number | null; error: string | null }>
) =>
  catchAsync(async (req: Request, res: Response, _next: NextFunction) => {
    const { songId, userId } = req.params
    const longestStreak = await computeLongestStreak(songId, userId)
    if (longestStreak.error) return res.status(httpStatus.BAD_REQUEST).send(longestStreak.error)
    res.status(httpStatus.OK).send(longestStreak.success)
  })

export { generateSongRequest, getWeatherStatistics, getLongestStreak }
