import axios from 'axios'

import { queryWeatherByLocation } from 'app/report/application'
import data from './mockData.json'

jest.mock('axios')

describe('queryWeatherByLocation', () => {
  it('should return the weather statistics data', async () => {
    const lat = 33.44
    const lon = -94.04

    const payload = { data: data.openApi.weather[0] }

    axios.get = jest.fn().mockResolvedValue(payload)
    await expect(queryWeatherByLocation({ latitude: lat, longitude: lon })).resolves.toBe(
      data.openApi.weather[0]
    )
  })
})
