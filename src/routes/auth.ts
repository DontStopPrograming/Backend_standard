import { Request, Response, Router } from 'express'
import { loginCtrl, register } from '../controllers/auth'

const router = Router()

router.post('/register', register)
router.post('/login', loginCtrl)

export { router }