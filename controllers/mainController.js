import { mainService } from '../services';

const getProductsMainPage = async (req, res) => {
  try {
    const { rating } = req.query;
    const mainPageProducts = await mainService.getProductsMainPage(rating);
    res.status(200).json({
      message: 'GET_PRODUCTS',
      data: mainPageProducts,
    });
  } catch (err) {
    console.log(err);
  }
};

export default {
  getProductsMainPage,
};
