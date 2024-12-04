import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt'

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || null
        const jwt = jwtByUser?.split(' ').pop()
        const isOk = verifyToken(`${jwt}`)
        if (!isOk) {
            res.status(401)
            res.send('DONT_HAVE_VALID')
        } else {
            console.log({ jwtByUser })
            next()
        }

    } catch (error) {
        res.status(400)
        res.send('INVALID_SESSION')
    }
}