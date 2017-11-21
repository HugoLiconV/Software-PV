import { Router } from 'express'
import product from './products'
import supplier from './proveedores'

const router = new Router();

router.use('/products', product);
router.use('/suppliers', supplier);
export default router;
