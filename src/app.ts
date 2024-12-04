import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import db from './config/mongo'

import { router } from './routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

db().then(() => console.log('Conection is Ready in mongoDB'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
