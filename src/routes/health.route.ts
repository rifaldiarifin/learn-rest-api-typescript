import { type Request, type Response, Router } from 'express'
import { logger } from '../utils/logger'

export const HealthRouter: Router = Router()

HealthRouter.get('/', (req: Request, res: Response) => {
  res.status(200).send({ statusCode: 200, status: 'OK' })
  logger.info('Health Check Success')
})
