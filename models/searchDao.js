import prisma from '../prisma';

const getSearchProductsList = async (
  name,
  rating,
  price,
  createdAt,
  indexOfLast,
  indexOfFirst,
) => {
  let searchProduct = {
    skip: indexOfLast,
    take: indexOfFirst,
    where: {
      name: {
        contains: name,
      },
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
    orderBy: {
      price: price === undefined ? undefined : price,
      createdAt: createdAt === undefined ? undefined : createdAt,
    },
  };

  const searchProductsList = await prisma.product.findMany(searchProduct);

  return searchProductsList;
};

export default {
  getSearchProductsList,
};
