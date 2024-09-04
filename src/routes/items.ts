import { Request, Response, Router } from 'express'

import { getItems, getItem, postItem, patchItem, delItem } from '../controllers/item'

export const router = Router()

router.get('/item', getItems)

router.get('/item/:id', getItem)

router.post('/item', postItem)

router.patch('/item/:id', patchItem)

router.delete('/item/:id', delItem)

export default { router, getItems, getItem, postItem, patchItem, delItem }

