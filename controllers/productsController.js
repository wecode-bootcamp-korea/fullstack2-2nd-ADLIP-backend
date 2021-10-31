import { productsService } from '../services';

const getAllProductsList = async (req, res) => {
  try {
    const { rating, price, createdAt, limit, offset } = req.query;
    const productsByCategories = await productsService.getAllProductsList(
      rating,
      price,
      createdAt,
      limit,
      offset,
    );

    res.status(200).json({
      message: 'GET_PRODUCTS',
      data: productsByCategories,
    });
  } catch (err) {
    console.log(err);
  }
};

export default {
  getAllProductsList,
};
