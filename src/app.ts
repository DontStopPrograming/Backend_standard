import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import { db } from './config/mongo'

import { router } from '@/routes/index'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

db().then(() => console.log('Connection is Ready in mongoDB'))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))

