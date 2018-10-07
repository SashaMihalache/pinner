import express from 'express'
import * as controller from './HelloController'

const router = express.Router()

router.get('/hello', controller.index)

export default router
