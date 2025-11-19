import { Request, Response, NextFunction } from 'express'
import { RequestExt } from '../interface/req-ext'
import { verifyToken } from '../utils/jwt'

export const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || null
        const jwt = jwtByUser?.split(' ').pop()
        const isUser = verifyToken(`${jwt}`) as { id: string }
        if (!isUser) {
            res.status(401)
            res.send('DONT_HAVE_VALID')
        } else {
            req.user = isUser
            next()
        }

    } catch (error) {
        res.status(400)
        res.send('INVALID_SESSION')
    }
}

