import express from 'express';
import userRouter from './userRouter';
import mainRouter from './mainRouter';
import categoryRouter from './categoryRouter';
import productRouter from './productRouter';
import productsRouter from './productsRouter';
import searchRouter from './searchRouter';

const router = express.Router();

router.use('/user', userRouter);
router.use('/', mainRouter);
router.use('/category', categoryRouter);
router.use('/product', productRouter);
router.use('/products', productsRouter);
router.use('/search', searchRouter);

export default router;
