import { categoryDao } from '../models';

const mainCategories = async () => {
  const mainCategories = await categoryDao.mainCategories();
  if (!mainCategories) console.log('main_categories_404err?!');
  return mainCategories;
};

const mainCategoriesProducts = async (mainId, rating) => {
  const mainCategoriesProducts = await categoryDao.mainCategoriesProducts(
    mainId,
    rating,
  );

  if (!mainCategoriesProducts) console.log('main_categories_404err?!');

  let result = mainCategoriesProducts.map(bigProduct => {
    let ratings = bigProduct.map(product => {
      product.rating = product.ProductOrder.reduce((acc, value, index) => {
        return (
          (acc * index +
            value.order.Comment.reduce((acc2, value2, index2) => {
              return (acc2 * index2 + value2.rating) / (index2 + 1);
            }, 0)) /
          (index + 1)
        );
      }, 0);
      return product;
    });

    for (let i = 0; i < ratings.length; i++) {
      delete ratings[i].ProductOrder;
    }

    if (rating != undefined && rating === 'asc') {
      ratings = ratings.sort(function (a, b) {
        return b.rating - a.rating;
      });
    } else if (rating != undefined && rating === 'desc') {
      //(rating === 'desc')
      ratings = ratings.sort(function (a, b) {
        return a.rating - b.rating;
      });
    }

    return ratings;
  });

  return {
    mainCategoriesProductsByRating: result[0],
    mainCategoriesProductsByNew: result[1],
    mainCategoriesProductsByDiscount: result[2],
    mainCategoriesProductsByOnly: result[3],
  };
};

const subCategoriesProducts = async (mainId, subId, rating) => {
  const subCategoriesProducts = await categoryDao.subCategoriesProducts(
    mainId,
    subId,
    rating,
  );

  if (!subCategoriesProducts) console.log('sub_categories_404err?!');

  let result = subCategoriesProducts.map(bigProduct => {
    let ratings = bigProduct.map(product => {
      product.rating = product.ProductOrder.reduce((acc, value, index) => {
        return (
          (acc * index +
            value.order.Comment.reduce((acc2, value2, index2) => {
              return (acc2 * index2 + value2.rating) / (index2 + 1);
            }, 0)) /
          (index + 1)
        );
      }, 0);
      return product;
    });

    for (let i = 0; i < ratings.length; i++) {
      delete ratings[i].ProductOrder;
    }

    // if (rating != undefined && rating === 'asc') {
    //   ratings = ratings.sort(function (a, b) {
    //     return b.rating - a.rating;
    //   });
    // } else if (rating != undefined && rating === 'desc') {
    //   //(rating === 'desc')
    //   ratings = ratings.sort(function (a, b) {
    //     return a.rating - b.rating;
    //   });
    // }
    return ratings;
  });

  return {
    subCategoriesProductsByRating: result[0],
    subCategoriesProductsByNew: result[1],
    subCategoriesProductsByDiscount: result[2],
    subCategoriesProductsByOnly: result[3],
  };
};

export default {
  mainCategories,
  mainCategoriesProducts,
  subCategoriesProducts,
};
