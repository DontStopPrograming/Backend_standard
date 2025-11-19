import { Types } from "mongoose";
import { User } from "./user.interface"
import { Vehicle } from "./vehicle.interface";

export interface Order {
    user: Types.ObjectId | User
    item: (Types.ObjectId | Vehicle)[]
    status: 'pending' | 'paid' | 'shipped' | 'cancelled'
    total: number
}
