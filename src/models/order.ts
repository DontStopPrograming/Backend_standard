import { Schema, Types, model, Model } from 'mongoose'

import { Order } from '@/interface/order'

const orderSchema = new Schema<Order>(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        item: [
            {
                type: Schema.Types.ObjectId,
                ref: 'item',
                required: true,
            },
        ],

        status: {
            type: String,
            enum: ['pending', 'paid', 'shipped', 'cancelled'],
            default: 'pending',
        },

        total: {
            type: Number,
            required: true,
        },
    },

    {
        timestamps: true,
        versionKey: false,
    }
)

const orderModel = model('orders', orderSchema)

export { orderModel }