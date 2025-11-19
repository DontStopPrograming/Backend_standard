import 'dotenv/config'
import jwt from 'jsonwebtoken'

const { sign, verify } = jwt

const JWT_SECRET = process.env.JWT_SECRET || 'token.01'

export const generateToken = (id: string) => {

    const jwt = sign({ id }, JWT_SECRET, {
        expiresIn: '2h',
    })
    return jwt
}

export const verifyToken = (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET)
    return isOk
}
