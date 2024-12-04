import { Request, Response, Router } from 'express'

import { getItems, getItem, postItem, patchItem, delItem } from '../controllers/item'
import { logMiddleware } from '../middleware/log'

export const router = Router()

router.get('/', getItems)

router.get('/:id', logMiddleware, getItem)

router.post('/', postItem)

router.patch('/:id', patchItem)

router.delete('/:id', delItem)

export default router

