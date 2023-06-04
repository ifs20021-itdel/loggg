import express from 'express'
import { diseaseValidate } from '../validation/diseaseSchema.js'
import { validate } from '../middleware/validate.js'
import auth from '../middleware/authentication.js'

// memanggil controller about
import {
    getDisease, getByIdDisease,
    postDisease
} from '../controller/diseaseController.js'

const router = express.Router()


// GET DATA
router.get('/disease', auth, getDisease)

// GET DATA BY ID
router.get('/disease/:disease_id', auth, getByIdDisease)

// POST DATA
router.post('/disease', auth, validate(diseaseValidate), postDisease)


export default router 