import { Location } from './Location'

export interface SongReport {
  songId: string // defined for practical use, but should be a UUID with a validation funciton
  location: Location
}
