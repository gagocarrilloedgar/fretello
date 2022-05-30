import { ReportRepository, ReportRequest, Report } from 'src/app/report/domain/interfaces'

import { ReportMongoModel } from './reportSchema.mongoose'

export const reportMongoRepository = (): ReportRepository => {
  const addNewSongReport = (songReport: ReportRequest): Promise<Report> =>
    ReportMongoModel.create(songReport)

  const findReportsBySongId = (songId: string): any => ReportMongoModel.find({ songId })

  // Here we should probability use the specification pattern
  const findSongReportByUserId = (userId: string): any => ReportMongoModel.find({ userId })

  return {
    addNewSongReport,
    findReportsBySongId,
    findSongReportByUserId
  }
}
