import { IS_PRODUCTION } from './env'

const localhostReggex = /^(http:\/\/localhost|http:\/\/127\.0\.0\.1)/

const allowedOrigins = ['https://fretello.com']

export const corsOptions = (req: any, callback: any) => {
  let options
  const allowedLocalhost = localhostReggex.test(req.header('Origin'))
  const condition = IS_PRODUCTION
    ? allowedOrigins.indexOf(req.header('Origin')) !== -1
    : allowedLocalhost

  if (condition) {
    options = {
      origin: true,
      credentials: true,
      optionsSuccessStatus: 200
    }
  } else {
    options = { origin: false }
  }

  callback(null, options)
}
