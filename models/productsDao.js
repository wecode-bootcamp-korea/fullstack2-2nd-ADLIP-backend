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

export default {
  getAllProductsList,
};
