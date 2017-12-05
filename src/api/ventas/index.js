const express = require('express');

import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './sales.controller'
import { schema } from './model'
export Sale, { schema } from './model'


//id, [Transaction], total, fecha

const router = express.Router()

const {transactions, total} = schema.tree;


/**
 * @api {post} /sales Crea una venta
 * @apiName CreateSale
 * @apiGroup User
 * @apiParam [Transacciones] Array de las ids de las transacciones
 * @apiParam Total total de la venta
 * @apiSuccess {Object} sales Datos de la venta.
 * @apiError {Object} 400 Parametros incorrectos o valores erroneos.
 * @apiError 404 venta no encontrada.
 */
router.post('/',
	body({transactions, total}),
	create)

/**
 * @api {get} /sales Regresa las ventas.
 * @apiName RetrieveSales
 * @apiGroup User
 * @apiUse listParams
 * @apiSuccess {Object[]} sales Lista de ventas.
 * @apiError {Object} 400 Parametros incorrectos o valores erroneos.
 */
router.get('/',
	index)

/**
 * @api {get} /sales/:id Regresa una venta 
 * @apiName RetrieveSale
 * @apiGroup User
 * @apiSuccess {Object} sa;e Datos de la venta
 * @apiError {Object} 400 Parametros incorrectos o valores erroneos.
 * @apiError 404 Venta no encontrada.
 */
router.get('/:id',
	show)

/**
 * @api {put} /sales/:id Actualizar venta
 * @apiName UpdateSale
 * @apiGroup User
 * @apiParam [Transacciones] Array de las ids de las transacciones
 * @apiParam Total total de la venta
 * @apiSuccess {Object} Sale datos de la venta.
 * @apiError {Object} 400 Parametros incorrectos o valores erroneos.
 * @apiError 404 Venta no encontrada.
 */
router.put('/:id',
	body({transactions, total}),
	update)

/**
 * @api {delete} /sales/:id Eliminar venta
 * @apiName DeleteSale
 * @apiGroup User
 * @apiSuccess (Success 204) 204 Sin contenido.
 * @apiError 404 Venta no encontrada.
 */
router.delete('/:id',
	destroy)
export default router;
