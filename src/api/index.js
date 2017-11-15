import { Router } from 'express'
import product from './products'

const router = new Router()

router.use('/products', product);

export default router;
