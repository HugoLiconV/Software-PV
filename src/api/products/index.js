import { Router } from 'express'
const router = new Router()

// set the routes
router.get('/', (req, res) => {
  res.send('Hello, I am the app!')
})

export default router;
