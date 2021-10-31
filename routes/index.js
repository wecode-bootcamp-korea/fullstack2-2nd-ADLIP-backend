import express from 'express';
import categoryRouter from './categoryRouter';
import userRouter from './userRouter';
import productRouter from './productRouter';
import productsRouter from './productsRouter';

const router = express.Router();

router.use('/category', categoryRouter);
router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/products', productsRouter);

export default router;
