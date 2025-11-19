import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import { insertVehicle, getVehicle, getDetailVehicle, updateVehicle, deleteVehicle } from '../services/item'

export const getItems = async (req: Request, res: Response) => {
    try {
        const responseInsert = await getVehicle()
        res.send(responseInsert)
    } catch (error) {
        handleHttp(res, 'ERROR GET DATA')
    }
}

export const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const responseDetail = await getDetailVehicle(id)
        const data = responseDetail ? responseDetail : 'NOT_FOUND'
        res.send(data)
    } catch (error) {
        handleHttp(res, 'ERROR GET DATA BY ID')
    }
}

export const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseInsert = await insertVehicle(body)
        res.status(201).send(responseInsert)

    } catch (error) {
        handleHttp(res, 'ERROR POST DATA', error)
    }
}

export const patchItem = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params
        const responseUpdate = await updateVehicle(id, body)
        if (!responseUpdate) {
            return res.status(404).send('Item NOT FOUND')
        }
        res.send(responseUpdate)
    } catch (error) {
        handleHttp(res, 'ERROR UPDATE DATA')
    }
}

export const delItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const responseDelete = await deleteVehicle(id)
        res.send(responseDelete)
    } catch (error) {
        handleHttp(res, 'ERROR DELETE DATA')
    }
}