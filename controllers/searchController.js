import { searchService } from '../services';

const getSearchProductsList = async (req, res) => {
  try {
    const { name, rating, price, createdAt, indexOfLast, indexOfFirst } =
      req.query;
    const searchProductsList = await searchService.getSearchProductsList(
      name,
      rating,
      price,
      createdAt,
      indexOfLast,
      indexOfFirst,
    );

    res.status(200).json({
      message: 'GET_PRODUCTS',
      data: searchProductsList,
    });
  } catch (err) {
    console.log(err);
  }
};

export default {
  getSearchProductsList,
};
