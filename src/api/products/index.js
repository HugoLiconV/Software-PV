import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './products.controller'
import { schema } from './model'
export Product, { schema } from './model'

const router = new Router()
const { nombre, cantidad, precioVenta, precioCompra } = schema.tree

// set the routes
router.post('/',
	body({ nombre, cantidad, precioVenta, precioCompra }),
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
