import Express from 'express'
import registerRouter from './routes/register'
import usersRouter from './routes/users'
import cors from 'cors'


const app = Express()

app.use(cors())
app.use('register', registerRouter)
app.use('/users', usersRouter)


export default app