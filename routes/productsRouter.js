import express from 'express';
import { productsController } from '../controllers';

const router = express.Router();

router.get('/', productsController.getAllProductsList);
router.get('/:id', productsController.getProductDetailRelation);

export default router;
