import { ReportRepository, ReportService } from 'app/reporting/domain/interfaces'

import { generateSongReport } from './generateSongReport'

export const reportServices = (reportRepository: ReportRepository): ReportService => {
  return { generateSongReport: generateSongReport(reportRepository.addNewSongReport) }
}
