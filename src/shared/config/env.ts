import 'dotenv-safe/config'

const DEV = 'development'
const PROD = 'production'

export const NODE_ENV = process.env.NODE_ENV

export const IS_PRODUCTION = NODE_ENV === PROD
export const IS_DEV = NODE_ENV === DEV

export const PORT = process.env.PORT || 3001
export const SERVER_URL = IS_DEV
  ? `http://localhost:${PORT}`
  : process.env.SERVER_URL

export const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/'
