import { User } from "../interface/user.interface"

import { Schema, Types, model, Model, } from 'mongoose'

export const authSchema = new Schema<User>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: 'yeah',
        },
        description: {
            type: String,
            default: 'not yet',
        },
    },

    {
        timestamps: true,
        versionKey: false,
    }
)

export const authModel = model('user', authSchema)

export default { authModel }
