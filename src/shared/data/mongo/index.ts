import mongoose from 'mongoose'

import { MONGO_URL } from 'shared/config/env'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true
}

console.log(MONGO_URL)
console.log('connecting to database...')

mongoose
  .connect(MONGO_URL, options)
  .then(() => {
    console.log('Mongoose connection done')
  })
  .catch((e) => {
    console.error('Mongoose connection error')
    console.error(e)
  })

// When successfully connecteds
mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open to ' + MONGO_URL)
})

// If the connection throws an error
mongoose.connection.on('error', (err) => {
  console.error('Mongoose default connection error: ' + err)
})

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected')
})

// If the Node process ends, close the Mongoose connection (ctrl + c)
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log(
      'Mongoose default connection disconnected through app termination'
    )
    process.exit(0)
  })
})

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception: ' + err)
})

export default mongoose
  .connect(MONGO_URL, options)
  .then((c) => c.connection.getClient())
