import express, { Express } from 'express'
import productRoutes from './routes/ProductRoutes'

const app: Express = express()
const port: number = 3000

app.use(express.json())

app.use('/api/', productRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

export default app
