import express, { type NextFunction, type Application, type Response } from 'express'
import { routes } from './routes/index.route'
import { logger } from './utils/logger'
import bodyParser from 'body-parser'
import cors from 'cors'

// Connect Database
import './utils/connectDB'

import deserializeToken from './middleware/deserializedToken'

const app: Application = express()
const port: number = 4000

// body parse data
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// CORS handler
app.use(cors())
app.use((_, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})

app.use(deserializeToken)

routes(app)

app.listen(port, () => logger.info(`Server listening on port ${port}`))
