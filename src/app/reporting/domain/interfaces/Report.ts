import { Location } from './Location'

export interface ReportRequest {
  songId: string // defined for practical use, but should be a UUID with a validation funciton
  location: Location
}

export interface Report {
  id: string
  songId: string
  location: Location
  updatedAt: Date
  createdAt: Date
}
