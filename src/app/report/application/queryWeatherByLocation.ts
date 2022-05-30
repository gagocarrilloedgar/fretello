import axios from 'axios'

import { Location, SongWeather } from 'app/report/domain/interfaces'
import { OPEN_WEATHER_API_KEY, WEATHER_API_URL } from 'shared/config'

export const queryWeatherByLocation = async (location: Location): Promise<SongWeather | null> => {
  const { longitude, latitude } = location
  const queryUrl = `${WEATHER_API_URL}lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}`

  return axios
    .get(queryUrl)
    .then((response) => response.data.weather[0])
    .catch((error) => {
      console.log(error)
      return null
    })
}
