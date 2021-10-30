import express from 'express';
import { signUpController } from '../controllers';
import { validator } from '../middlewares/validator';
const router = express.Router();

router.post('/signup', validator, signUpController.createUser);

export default router;
