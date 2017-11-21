import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './suppliers.controller'
import { schema } from './model'
export Supplier, { schema } from './model'

const router = new Router();

const { nombre, email, telefono, direccion } = schema.tree;

// set the routes
router.post('/',
	body({ nombre, email, telefono, direccion }),
	create);
router.get('/',
	index);
router.get('/:id',
	show);
router.put('/:id',
	body({ nombre, email, telefono, direccion }),
	update);
router.delete('/:id',
	destroy);
export default router;
