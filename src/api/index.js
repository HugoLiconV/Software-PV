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
export default router;
