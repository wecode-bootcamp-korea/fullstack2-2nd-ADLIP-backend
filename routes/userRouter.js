import express from 'express';
import { userController } from '../controllers';
import {
  signUpValidator,
  signInValidator,
  statusAndPlatformValidator,
} from '../middlewares/validator';
import { isAuth } from '../middlewares/auth';
const router = express.Router();

router.post('/signup', signUpValidator, userController.createUser);
router.post('/signin', signInValidator, userController.signInUser);
router.post('/kakao', statusAndPlatformValidator, userController.signInKakao);
router.post('/me', isAuth, userController.me);

export default router;
