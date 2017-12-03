import { Router } from 'express'
import product from './products'
import supplier from './proveedores'
import register from './caja'

const router = new Router();

router.use('/products', product);
router.use('/suppliers', supplier);
router.use('/register', register);
export default router;
