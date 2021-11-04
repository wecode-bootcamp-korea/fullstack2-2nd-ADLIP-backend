import { searchDao } from '../models';

const getSearchProductsList = async (
  name,
  rating,
  price,
  createdAt,
  limit,
  offset,
) => {
  const searchProductsList = await searchDao.getSearchProductsList(
    name,
    rating,
    price,
    createdAt,
    limit,
    offset,
  );

  if (!searchProductsList) console.log('all_products_list_404err?!');

  let ratings = searchProductsList.map(product => {
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
};
export default {
  getSearchProductsList,
};
