import express from 'express';
import { productsController } from '../controllers';

const router = express.Router();
router.get(
  '/:mainId/:subId',
  (req, res, next) => {
    if (req.params.subId === 'all') {
      next('route');
    } else {
      next();
    }
  },
  productsController.getAllProductsListByCategories,
);
router.get('/:mainId/all', productsController.getProductDetailRelation);
router.get('/', productsController.getAllProductsList);

export default router;
