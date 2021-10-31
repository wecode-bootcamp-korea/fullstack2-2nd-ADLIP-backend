import { productsDao } from '../models';

const getAllProductsList = async (rating, price, createdAt, limit, offset) => {
  const productsByCategories = await productsDao.getAllProductsList(
    rating,
    price,
    createdAt,
    limit,
    offset,
  );

  if (!productsByCategories) console.log('all_products_list_404err?!');

  let ratings = productsByCategories.map(product => {
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
      return a.rating - b.rating;
    });
  } else {
    //(rating === 'desc')
    ratings = ratings.sort(function (a, b) {
      return b.rating - a.rating;
    });
  }

  return ratings;
};
export default {
  getAllProductsList,
};
