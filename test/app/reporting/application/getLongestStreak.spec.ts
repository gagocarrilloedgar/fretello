import { getLongestStreak } from 'app/report/application'

describe('getLongestStreak', () => {
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
      createdAt: new Date('2020-01-01 00:00:00')
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
      createdAt: new Date('2020-01-02 10:00:00')
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
      createdAt: new Date('2020-01-03 11:00:00')
    },
    {
      songId: '5e9f8f8f8f8f8f8f8f8f810',
      location: { latitude: 33.44, longitude: -94.04 },
      weather: {},
      updatedAt: new Date(),
      createdAt: new Date('2020-01-02 12:00:00')
    }
  ]
  it('Should return the longest streak when data passed exists', async () => {
    const findSongReportByQuery = jest.fn().mockResolvedValue(mockReports)
    const result = await getLongestStreak(findSongReportByQuery)(songId, 'fakeId')
    expect(result.success).toEqual(2)
  })
})
