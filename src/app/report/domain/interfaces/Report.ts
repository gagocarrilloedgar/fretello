import { Location } from './Location'

export interface ReportRequest {
  songId: string // defined for practical use, but should be a UUID with a validation funciton
  location: Location
}

export interface SongWeather {
  id: number
  main: string
  description: string
  icon: string
}

export interface SongStatistics {
  id: number
  main: string
  description: string
  icon: string
  count: number
  share: number
}

export interface Report {
  id: string
  songId: string
  location: Location
  weather?: SongWeather
  updatedAt: Date
  createdAt: Date
}
