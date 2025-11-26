import 'dotenv/config'
import mongoose, { connect } from 'mongoose'

async function db(): Promise<void> {
    mongoose.set('strictQuery', false)
    const DB_URI = <string>process.env.DB_URI
    await connect(DB_URI)
}

export { db }
