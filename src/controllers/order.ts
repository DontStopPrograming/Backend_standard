import { Request, Response } from 'express'

import { RequestExt } from '../interface/req-ext'

import { handleHttp } from '../utils/error.handle'

export const getItems = (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: 'THIS CAN ONLY BE SEEN BY PEOPLE WHO ARE LOGGED IN / JWT',
            user: req.user
        })
    } catch (error) {
        handleHttp(res, 'ERROR_GET_BLOGS')
    }
}
