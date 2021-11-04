import { categoryService } from '../services';

const mainCategories = async (req, res) => {
  try {
    const mainCategories = await categoryService.mainCategories();
    res.status(200).json({
      message: 'SUCCESS',
      data: mainCategories,
    });
  } catch (err) {
    console.log(err);
  }
};

const mainCategoriesProducts = async (req, res) => {
  try {
    const { mainId } = req.params;
    const { rating } = req.query;
    const mainCategoriesProducts = await categoryService.mainCategoriesProducts(
      mainId,
      rating,
    );
    res.status(200).json({
      message: 'SUCCESS',
      data: mainCategoriesProducts,
    });
  } catch (err) {
    console.log(err);
  }
};

const subCategoriesProducts = async (req, res) => {
  try {
    const { mainId, subId } = req.params;
    const { rating } = req.query;
    const subCategoriesProducts = await categoryService.subCategoriesProducts(
      mainId,
      subId,
      rating,
    );
    res.status(200).json({
      message: 'SUCCESS',
      data: subCategoriesProducts,
    });
  } catch (err) {
    console.log(err);
  }
};

// const getAllProductsListByCategories = async (req, res) => {
//   try {
//     const { mainId, subId } = req.params;
//     const { rating, price, createdAt, indexOfLast, indexOfFirst } = req.query;
//     const getAllProductsListByCategories =
//       await productsService.getAllProductsListByCategories(
//         mainId,
//         subId,
//         rating,
//         price,
//         createdAt,
//         indexOfLast,
//         indexOfFirst,
//       );

//     res.status(200).json({
//       message: 'SUCCESS',
//       data: getAllProductsListByCategories,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export default {
  mainCategories,
  mainCategoriesProducts,
  subCategoriesProducts,
  // getAllProductsListByCategories,
};
