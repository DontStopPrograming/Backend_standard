import bcrypt from 'bcryptjs'

const encrypt = async (pass: string) => {
    const passwordHash = await bcrypt.hash(pass, 8)
    return passwordHash
}

const verified = async (pass: string, passHash: string) => {
    const isCorrect = await bcrypt.compare(pass, passHash)
    return isCorrect
}

export { encrypt, verified }
