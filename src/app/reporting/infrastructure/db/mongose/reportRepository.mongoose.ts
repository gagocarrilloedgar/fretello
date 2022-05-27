import { ReportRepository, ReportRequest, Report } from 'app/reporting/domain/interfaces'

import { ReportMongoModel } from './reportSchema.mongoose'

export const reportMongoRepository = (): ReportRepository => {
  const addNewSongReport = (songReport: ReportRequest): Promise<Report> =>
    ReportMongoModel.create(songReport)

  return {
    addNewSongReport
  }
}
