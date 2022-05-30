import { Location } from 'src/app/report/domain/interfaces'

export const validateReportLocation = (location: Location): boolean => {
  if (!location.latitude || !location.longitude) return false

  return (
    location.longitude >= -180 &&
    location.longitude <= 180 &&
    location.latitude >= -90 &&
    location.latitude <= 90
  )
}
