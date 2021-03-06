import mongoose from 'mongoose'
import config from '@config/index'

export const connectDB = () => {
  mongoose.set('debug', true)

  mongoose.connect(config.dbPath, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

  mongoose.connection.on('open', async () => {
    console.log('Connected to MongoDB ', config.dbPath)
  })

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(config.dbPath)
  })

  mongoose.connection.on('error', err => {
    console.error(err)
  })
}
