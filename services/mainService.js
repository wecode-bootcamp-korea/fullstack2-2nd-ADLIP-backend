import { mainDao } from '../models';

const getProductsMainPage = async rating => {
  const mainPageProducts = await mainDao.getProductsMainPage(rating);

  if (!mainPageProducts) console.log('main_page_404err?!');

  let result = mainPageProducts.map(bigProduct => {
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
    } else {
      //(rating === 'desc')
      ratings = ratings.sort(function (a, b) {
        return a.rating - b.rating;
      });
    }

    return ratings;
  });

  return {
    monthlyTheme: result[0],
    limitPeriodDiscount: result[1],
    newProduct: result[2],
    includeRatingProduct: result[3],
  };
};
export default {
  getProductsMainPage,
};
