import prisma from '../prisma';

const getAllProductsList = async (
  rating,
  price,
  createdAt,
  indexOfLast,
  indexOfFirst,
) => {
  let listPageProduct = {
    skip: indexOfLast,
    take: indexOfFirst,
    select: {
      id: true,
      mainCategoryId: true,
      subCategoryId: true,
      mainImageUrl: true,
      summary: true,
      name: true,
      price: true,
      discountRate: true,
      isNew: true,
      isOnly: true,
      createdAt: true,
      ProductOrder: {
        select: {
          order: {
            select: {
              Comment: {
                select: {
                  rating: true,
                },
              },
            },
          },
        },
      },
    },
    orderBy: {
      price: price === undefined ? undefined : price,
      createdAt: createdAt === undefined ? undefined : createdAt,
    },
  };

  const productsByCategories = await prisma.product.findMany(listPageProduct);

  return productsByCategories;
};

const getProductDetailRelation = async (mainId, subId, rating) => {
  const getProductDetailRelation = await prisma.product.findMany({
    where: {
      mainCategoryId: parseInt(mainId),
    },
    select: {
      id: true,
      mainCategoryId: true,
      subCategoryId: true,
      mainImageUrl: true,
      summary: true,
      name: true,
      price: true,
      discountRate: true,
      isNew: true,
      isOnly: true,
      createdAt: true,
      ProductOrder: {
        select: {
          order: {
            select: {
              Comment: {
                select: {
                  rating: true,
                },
              },
            },
          },
        },
      },
    },
  });
  return getProductDetailRelation;
};

const getAllProductsListByCategories = async (mainId, subId, rating) => {
  let listPageProduct = {
    take: 4,
    where: {
      mainCategoryId: parseInt(mainId),
      subCategoryId: parseInt(subId),
    },
    select: {
      id: true,
      mainCategoryId: true,
      subCategoryId: true,
      mainImageUrl: true,
      summary: true,
      name: true,
      price: true,
      discountRate: true,
      isNew: true,
      isOnly: true,
      createdAt: true,
      ProductOrder: {
        select: {
          order: {
            select: {
              Comment: {
                select: {
                  rating: true,
                },
              },
            },
          },
        },
      },
    },
    // orderBy: {
    //   price: price === undefined ? undefined : price,
    //   createdAt: createdAt === undefined ? undefined : createdAt,
    // },
  };

  const getAllProductsListByCategories = await prisma.product.findMany(
    listPageProduct,
  );

  return getAllProductsListByCategories;
};

export default {
  getAllProductsList,
  getProductDetailRelation,
  getAllProductsListByCategories,
};
