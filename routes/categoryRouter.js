import express from 'express';
import { categoryController } from '../controllers';

const router = express.Router();

router.get('/:mainId/:subId', categoryController.subCategoriesProducts);
router.get('/:mainId', categoryController.mainCategoriesProducts);
router.get('/', categoryController.mainCategories);
// router.get('/:mainId/all', categoryController.getAllProductsListByCategories);

export default router;
