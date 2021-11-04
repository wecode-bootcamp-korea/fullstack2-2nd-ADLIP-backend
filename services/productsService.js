import { productsDao } from '../models';

const getAllProductsList = async (
  rating,
  price,
  createdAt,
  indexOfLast,
  indexOfFirst,
) => {
  const productsByCategories = await productsDao.getAllProductsList(
    rating,
    price,
    createdAt,
    indexOfLast,
    indexOfFirst,
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

const getProductDetailRelation = async (mainId, subId, rating) => {
  const getProductDetailRelation = await productsDao.getProductDetailRelation(
    mainId,
    subId,
    rating,
  );

  if (!getProductDetailRelation) console.log('relation_products_404err?!');

  let ratings = getProductDetailRelation.map(product => {
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

const getAllProductsListByCategories = async (mainId, subId, rating) => {
  const getAllProductsListByCategories =
    await productsDao.getAllProductsListByCategories(mainId, subId, rating);

  if (!getAllProductsListByCategories)
    console.log('all_products_list_404err?!');

  let ratings = getAllProductsListByCategories.map(product => {
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
  getProductDetailRelation,
  getAllProductsListByCategories,
};
