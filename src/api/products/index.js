import { Router } from 'express'

import { create, index, show, update, destroy } from './products.controller'

const router = new Router()

// set the routes
router.post('/',
	create)
router.get('/',
	index)
router.get('/:id',
	show)
router.put('/:id',
	update)
router.delete('/:id',
	destroy)
export default router;
