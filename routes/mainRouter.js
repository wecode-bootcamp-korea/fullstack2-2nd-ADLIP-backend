import express from 'express';
import { mainController } from '../controllers';

const router = express.Router();

router.get('/', mainController.getProductsMainPage);

export default router;
