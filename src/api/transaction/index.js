const express = require('express');

import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './transaction.controller'
import { schema } from './model'
export Transaction, { schema } from './model'

// id, producto, cantidad, subtotal
const router = express.Router()

const { producto, cantidad, subtotal } = schema.tree

// set the routes
router.post('/',
	body({ producto, cantidad, subtotal }),
	create)
router.get('/',
	index)
router.get('/:id',
	show)
router.put('/:id',
	body({ producto, cantidad, subtotal }),
	update)
router.delete('/:id',
	destroy)
export default router;
