import express from 'express';
import { categoryController } from '../controllers';

const router = express.Router();

router.get('/', categoryController.mainCategories);
router.get('/:mainId', categoryController.mainCategoriesProducts);
router.get('/:mainId/:subId', categoryController.subCategoriesProducts);

export default router;
