const express = require('express');

import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './sales.controller'
import { schema } from './model'
export Sale, { schema } from './model'


//id, [Transaction], total, fecha

const router = express.Router()

const {transactions, total} = schema.tree;

// set the routes
router.post('/',
	body({transactions, total}),
	create)
router.get('/',
	index)
router.get('/:id',
	show)
router.put('/:id',
	body({transactions, total}),
	update)
router.delete('/:id',
	destroy)
export default router;
