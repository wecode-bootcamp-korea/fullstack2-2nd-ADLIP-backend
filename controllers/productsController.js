import { productService, productsService } from '../services';

const getAllProductsList = async (req, res) => {
  try {
    const { rating, price, createdAt, indexOfLast, indexOfFirst } = req.query;
    const productsByCategories = await productsService.getAllProductsList(
      rating,
      price,
      createdAt,
      indexOfLast,
      indexOfFirst,
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
    const { mainId, subId } = req.params;
    const { rating } = req.query;
    const getProductDetailRelation =
      await productsService.getProductDetailRelation(mainId, subId, rating);

    res.status(200).json({
      message: 'SUCCESS',
      data: getProductDetailRelation,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllProductsListByCategories = async (req, res) => {
  try {
    const { mainId, subId } = req.params;
    const { rating } = req.query;
    const getAllProductsListByCategories =
      await productsService.getAllProductsListByCategories(
        mainId,
        subId,
        rating,
      );
    res.status(200).json({
      message: 'SUCCESS',
      data: getAllProductsListByCategories,
    });
  } catch (err) {
    console.log(err);
  }
};

export default {
  getAllProductsList,
  getProductDetailRelation,
  getAllProductsListByCategories,
};
