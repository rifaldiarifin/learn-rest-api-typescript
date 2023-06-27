import express, { type Application, type Response, type Request } from 'express'

const app: Application = express()
const port: number = 4000

app.use('/health', (req: Request, res: Response) => {
  res.status(200).send({ statusCode: 200, status: 'OK' })
})

app.listen(port, () => console.log(`Server listening on port ${port}`))
