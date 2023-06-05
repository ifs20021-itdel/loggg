import express from 'express';
import { recommendValidate } from '../validation/recommendSchema.js';
import { validate } from '../middleware/validate.js';
import auth from '../middleware/authentication.js';

// Memanggil controller recommend
import {
  getRecommend,
  postRecommend, getByIdRecommend
} from '../controller/recommendController.js';

const router = express.Router();

// Get data
router.get('/recommend_farm', auth, getRecommend);

router.get('/recommend_farm/:recommendation_id', auth, getByIdRecommend);


// Post data
router.post('/recommend_farm', auth, validate(recommendValidate), postRecommend);

export default router;
