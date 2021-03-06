import { checkSchema } from 'express-validator'

export const validateCreateReporting = checkSchema({
  songId: {
    in: ['body'],
    isUUID: true,
    errorMessage: 'id must be a UUID'
  },
  'location.latitude': {
    in: ['body'],
    isNumeric: true,
    errorMessage: 'latitude must be a number'
  },
  'location.longitude': {
    in: ['body'],
    isNumeric: true,
    errorMessage: 'longitude must be a number'
  }
})
