import { Vehicle } from "../interface/vehicle.interface"
import { itemModel } from '../models/items'

export const getOrder = async () => {
    const responseVehicle = await itemModel.find({})
    return responseVehicle
}