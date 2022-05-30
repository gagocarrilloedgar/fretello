import { getWeatherStatisticData } from 'app/report/application'

describe('getWeatherStatisticData', () => {
  const songId = '5e9f8f8f8f8f8f8f8f8f8f8'
  const mockReports = [
    {
      songId: '5e9f8f8f8f8f8f8f8f8f8f8',
      location: { latitude: 33.44, longitude: -94.04 },
      weather: {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d'
      },
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      songId: '5e9f8f8f8f8f8f8f8f8f8f8',
      location: { latitude: 33.44, longitude: -94.04 },
      weather: {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d'
      },
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      songId: '5e9f8f8f8f8f8f8f8f8f8f8',
      location: { latitude: 33.44, longitude: -94.04 },
      weather: {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d'
      },
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      songId: '5e9f8f8f8f8f8f8f8f8f8f8',
      location: { latitude: 33.44, longitude: -94.04 },
      weather: {},
      updatedAt: new Date(),
      createdAt: new Date()
    }
  ]
  it('Should return the satistics for the given songId', async () => {
    const findReportsBySongId = jest.fn().mockResolvedValue(mockReports)
    const queryWeatherByLocation = jest.fn().mockResolvedValue(mockReports[0].weather)
    const result = await getWeatherStatisticData(findReportsBySongId)(
      songId,
      queryWeatherByLocation
    )
    expect(result.success).toEqual([
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01d',
        count: 3,
        share: 0.75
      }
    ])
  })
})
