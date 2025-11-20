import { Vehicle } from "../interface/vehicle.interface"
import { itemModel } from '../models/items'

const getOrder = async () => {
    const responseVehicle = await itemModel.find({})
    return responseVehicle
}

export { getOrder }