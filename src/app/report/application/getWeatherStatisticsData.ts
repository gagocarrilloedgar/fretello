import { Report, SongStatistics } from 'app/report/domain/interfaces'
import { queryWeatherByLocation } from './queryWeatherByLocation'

export const getWeatherStatisticData =
  (findReportsBySongId: (songId: string) => Promise<Report[]>) =>
  async (songId: string): Promise<{ success: SongStatistics[] | null; error: string | null }> => {
    const reports = await findReportsBySongId(songId)

    if (!reports) return { success: null, error: 'There are no reports with that Id' }

    const weatherData = await Promise.all(
      reports.map(async (report) => {
        if (report.weather) return report.weather
        const songWeather = await queryWeatherByLocation(report.location)
        // add a function to save the weather data to the report if not already there
        if (!songWeather) return {}
        return songWeather
      })
    )

    // count statistics
    const totalDataPoints = weatherData.length

    // Unit test this function
    const weatherCounts = weatherData
      .reduce((acc: any, weather: any) => {
        if (!weather) return acc
        if (!acc.count) acc = { ...weather, count: 1 }
        else acc.count++
        return acc
      }, {})
      .sort((a: any, b: any) => b.count - a.count)
      .slice(0, 2)

    const statistics = weatherCounts.map((weather: any) => {
      return {
        ...weather,
        share: (weather.count / totalDataPoints) * 100
      }
    })

    return { success: statistics, error: null }
  }
