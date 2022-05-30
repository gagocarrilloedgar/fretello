import { Location } from './Location'
import { ReportRequest, SongStatistics, SongWeather } from './Report'

export interface ReportService {
  generateSongReport(
    report: ReportRequest
  ): Promise<{ success: string | null; error: string | null }>
  queryWeatherByLocation: (location: Location) => Promise<SongWeather | null>
  getWeatherStatisticsData(
    songId: string,
    queryWeatherByLocation: (location: Location) => Promise<SongWeather | null>
  ): Promise<{ success: SongStatistics[] | null; error: string | null }>
}
