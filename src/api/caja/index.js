//import { Router } from 'express'

const express = require('express');

import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './register.controller'
import { schema } from './model'
export Register, { schema } from './model'

const router = express.Router()


/*
* fecha, isActive, montoInicial
* */

const {isActive, montoInicial} = schema.tree

// set the routes
router.post('/',
	body({isActive, montoInicial}),
	create)
router.get('/',
	index)
router.get('/:id',
	show)
router.put('/:id',
	body({isActive, montoInicial}),
	update)
router.delete('/:id',
	destroy)
export default router;
