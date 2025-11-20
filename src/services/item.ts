import { Vehicle } from '../interface/vehicle.interface'
import { itemModel } from '../models/items'

const getVehicle = async () => {
    try {
        const responseItem = await itemModel.find({})
        return responseItem
    } catch (error) {
        console.error('ERROR IN GETVEHICLE', error)
        throw error
    }
}

const getDetailVehicle = async (id: string) => {
    const responseDetail = await itemModel.findById({ _id: id })
    return responseDetail
}

const insertVehicle = async (item: Vehicle) => {
    const responseInsert = await itemModel.create(item)
    return responseInsert
}

const updateVehicle = async (id: string, data: Vehicle) => {
    const responseUpdate = await itemModel.findOneAndUpdate({ _id: id }, data, {
        new: true,
    })
    return responseUpdate
}

const deleteVehicle = async (id: string) => {
    const responseDelete = await itemModel.deleteOne({ _id: id })
    return responseDelete

}

export { getVehicle, getDetailVehicle, insertVehicle, updateVehicle, deleteVehicle }