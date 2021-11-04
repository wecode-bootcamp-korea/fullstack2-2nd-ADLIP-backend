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
      message: 'SUCCESS',
      data: productsByCategories,
    });
  } catch (err) {
    console.log(err);
  }
};

const getProductDetailRelation = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating } = req.query;
    const getProductDetailRelation =
      await productsService.getProductDetailRelation(id, rating);

    res.status(200).json({
      message: 'SUCCESS',
      data: getProductDetailRelation,
    });
  } catch (err) {
    console.log(err);
  }
};

export default {
  getAllProductsList,
  getProductDetailRelation,
};
