import { ReportRepository, ReportService } from 'src/app/report/domain/interfaces'

import { generateSongReport } from './generateSongReport'

export const reportServices = (reportRepository: ReportRepository): ReportService => {
  return { generateSongReport: generateSongReport(reportRepository.addNewSongReport) }
}
