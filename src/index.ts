import 'reflect-metadata'
import Rapid from 'an-rapid'
import { connectDB } from './db'
connectDB()

const app = new Rapid()

app.listen(4000, () => {
  console.log('app run in http://localhost:4000')
})
