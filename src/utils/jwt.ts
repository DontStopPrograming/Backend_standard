import 'dotenv/config'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'token.01'

const generateToken = (id: string) => {

    const Jwt = jwt.sign({ id }, JWT_SECRET, {
        expiresIn: '2h',
    })
    return Jwt
}

const verifyToken = (token: string) => {
    const isOk = jwt.verify(token, JWT_SECRET)
    return isOk
}

export { generateToken, verifyToken }

