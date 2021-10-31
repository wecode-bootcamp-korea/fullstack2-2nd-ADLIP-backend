import express from 'express';
import { productsController } from '../controllers';

const router = express.Router();

router.get('/', productsController.getAllProductsList);

export default router;
