import 'dotenv/config'
import express from 'express'
import Routes from './routes'

const app = express()
app.use(express.json())
app.use(new Routes().router)

export default app