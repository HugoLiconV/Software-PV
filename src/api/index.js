import { Router } from 'express'
import product from './products'
import supplier from './proveedores'
import register from './caja'
import transaction from './transaction'
import sale from './ventas'

const router = new Router();

router.use('/products', product);
router.use('/suppliers', supplier);
router.use('/register', register);
router.use('/transaction', transaction);
router.use('/sales', sale);

/**
 * @apiDefine user User access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine listParams
 * @apiParam {String} [q] Query to search.
 * @apiParam {Number{1..30}} [page=1] Page number.
 * @apiParam {Number{1..100}} [limit=30] Amount of returned items.
 * @apiParam {String[]} [sort=-createdAt] Order of returned items.
 * @apiParam {String[]} [fields] Fields to be returned.
 */

export default router;
