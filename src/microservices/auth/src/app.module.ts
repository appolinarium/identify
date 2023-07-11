import Express from 'express'
import RegisterRouter from './routes/register'
import cors from 'cors'


const app = Express()

app.use(cors())
app.use(RegisterRouter)


export default app