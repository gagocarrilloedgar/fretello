import { Location } from './Location'

export interface Report {
  songId: string // defined for practical use, but should be a UUID with a validation funciton
  location: Location
}
