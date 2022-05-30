import { ReportRepository, ReportService } from 'src/app/report/domain/interfaces'

import { generateSongReport } from './generateSongReport'
import { getWeatherStatisticData } from './getWeatherStatisticsData'
import { queryWeatherByLocation } from './queryWeatherByLocation'

export const reportServices = (reportRepository: ReportRepository): ReportService => {
  return {
    generateSongReport: generateSongReport(reportRepository.addNewSongReport),
    queryWeatherByLocation,
    getWeatherStatisticsData: getWeatherStatisticData(reportRepository.findReportsBySongId)
  }
}
