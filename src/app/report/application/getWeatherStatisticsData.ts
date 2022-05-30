import { Report, SongStatistics, Location, SongWeather } from 'app/report/domain/interfaces'

// !TODO: Add the unit test + integration with the mongodb server for mocking
export const getWeatherStatisticData =
  (findReportsBySongId: (songId: string) => Promise<Report[]>) =>
  async (
    songId: string,
    queryWeatherByLocation: (location: Location) => Promise<SongWeather | null>
  ): Promise<{ success: SongStatistics[] | null; error: string | null }> => {
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
    const weatherCounts = weatherData.reduce((acc: any, weather: any) => {
      if (!weather.id) return acc
      if (!acc[weather.id]) acc[weather.id] = { ...weather, count: 1 }
      else acc[weather.id].count++
      return acc
    }, {})

    const statistics = Object.keys(weatherCounts)
      .map((key: any) => {
        const weather = weatherCounts[key]
        return {
          ...weather,
          share: weather.count / totalDataPoints
        }
      })
      .sort((a: any, b: any) => b.count - a.count)

    return { success: statistics, error: null }
  }
