import { Vehicle } from '../interface/vehicle.interface'

import { itemModel } from "../models/items"

export const getVehicle = async () => {
    const responseItem = await itemModel.find({})
    return responseItem
}

export const getDetailVehicle = async (id: string) => {
    const responseDetail = await itemModel.findById({ _id: id })
    return responseDetail
}

export const insertVehicle = async (item: Vehicle) => {
    const responseInsert = await itemModel.create(item)
    return responseInsert
}

export const updateVehicle = async (id: string, data: Vehicle) => {
    const responseUpdate = await itemModel.findOneAndUpdate({ _id: id }, data, {
        new: true,
    })
    return responseUpdate
}

export const deleteVehicle = async (id: string) => {
    const responseDelete = await itemModel.deleteOne({ _id: id })
    return responseDelete

}

export default { getVehicle, getDetailVehicle, insertVehicle, updateVehicle, deleteVehicle }