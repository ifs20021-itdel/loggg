import express from 'express'
import { plantValidate } from '../validation/plantSchema.js'
import { validate } from '../middleware/validate.js'
import auth from '../middleware/authentication.js'


import {
    getPlant, getByIdPlant,
    postPlant
} from '../controller/plantController.js'

const router = express.Router()


// GET plant
router.get('/plants', auth, getPlant)

// GET plant BY ID
router.get('/plants/:plant_id', auth, getByIdPlant)

// POST plant
router.post('/plants', auth, validate(plantValidate), postPlant)


export default router;