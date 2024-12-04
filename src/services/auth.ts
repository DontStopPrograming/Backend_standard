import { Auth } from "../interface/auth.interface"
import { User } from "../interface/user.interface"
import { authModel } from "../models/user"
import { encrypt, verified } from "../utils/bcrypt"
import { generateToken } from "../utils/jwt"


export const registerNewUser = async ({ email, password, name }: User) => {
    const checkIs = await authModel.findOne({ email })
    if (checkIs) return 'ALREADY USER'

    const passHash = await encrypt(password)

    const registerNewUser = await authModel.create({ email, password: passHash, name })
    return registerNewUser
}

export const loginUser = async ({ email, password }: Auth) => {
    const checkIs = await authModel.findOne({ email })
    if (!checkIs) return 'NOT FOUND USER'

    const passwordHash = checkIs.password
    const isCorrect = await verified(password, passwordHash)

    if (!isCorrect) return 'PASSWORD INCORRECT'

    const token = generateToken(checkIs.email)
    const data = {
        token,
        user: checkIs,
    }

    return data
}
