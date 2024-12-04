import { Request, Response, Router } from 'express'
import { loginCtrl, register } from '../controllers/auth'

export const router = Router()

router.post('/auth/register', register)
router.post('/auth/login', loginCtrl)

export default router