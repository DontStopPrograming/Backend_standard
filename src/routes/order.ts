import { Request, Response, Router } from 'express'

import { getItems } from '../controllers/order'

import { checkJwt } from '../middleware/session'

export const router = Router()

router.get('/', checkJwt, getItems)

export default router