import prisma from '../prisma';

const getAllProductsList = async (rating, price, createdAt, limit, offset) => {
  let listPageProduct = {
    skip: offset,
    take: limit,
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

const getProductDetailRelation = async (id, rating) => {
  const getProductDetailRelation = await prisma.product.findMany({
    take: 4,
    where: {
      id: parseInt(id),
      mainCategoryId: parseInt(id),
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

export default {
  getAllProductsList,
  getProductDetailRelation,
};
