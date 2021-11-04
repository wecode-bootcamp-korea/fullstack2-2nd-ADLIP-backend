import express from 'express';
import { searchController } from '../controllers';

const router = express.Router();

router.get('/', searchController.getSearchProductsList);

export default router;
