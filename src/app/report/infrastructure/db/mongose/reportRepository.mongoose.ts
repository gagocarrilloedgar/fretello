import { ReportRepository, ReportRequest, Report } from 'src/app/report/domain/interfaces'

import { ReportMongoModel } from './reportSchema.mongoose'

export const reportMongoRepository = (): ReportRepository => {
  const addNewSongReport = (songReport: ReportRequest): Promise<Report> =>
    ReportMongoModel.create(songReport)

  return {
    addNewSongReport
  }
}
