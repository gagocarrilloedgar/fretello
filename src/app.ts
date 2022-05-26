import express from 'express'

import cors from 'cors'
import helmet from 'helmet' // Security
import compression from 'compression' // Gzip
// @ts-ignore
import xss from 'xss-clean'
import httpStatus from 'http-status'
import morgan from 'morgan'

import { PORT, corsOptions, ApiError } from 'shared/config'
import { errorConverter, errorHandler } from 'shared/middlewares'

import routes from './routes'

// Create Express server
const app = express()

// Express configuration
app.set('port', PORT)

app.use(compression())
app.use(helmet())

// trust first proxy
app.set('trust proxy', 1)

// CORS
app.use(cors(corsOptions))

// Express Middlewares
app.use(morgan('dev'))
app.use(xss())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/v1', routes())

app.use((_req: any, _res: any, next: any) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'))
})

// Convert error to ApiError, if needed
app.use(errorConverter)

// Handle error
app.use(errorHandler)

export default app
