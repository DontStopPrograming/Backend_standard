import { Vehicle } from "../interface/vehicle.interface";

import { Schema, Types, model, Model } from "mongoose";


const itemSchema = new Schema<Vehicle>(
    {
        name: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        gas: {
            type: String,
            enum: ['gasoline', 'electric'],
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },

    {
        timestamps: true,
        versionKey: false,
    }
)

const itemModel = model('item', itemSchema)

export { itemModel }