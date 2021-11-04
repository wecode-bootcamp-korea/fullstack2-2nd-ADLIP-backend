import prisma from '../prisma';

const getProductsMainPage = async rating => {
  const monthlyTheme = await prisma.product.findMany({
    take: 4,
    where: {
      monthlyThemeProductId: 1,
    },
    select: {
      id: true,
      mainCategoryId: true,
      subCategoryId: true,
      monthlyThemeProductId: true,
      limitedPeriodDiscountProductId: true,
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

  const limitPeriodDiscount = await prisma.product.findMany({
    take: 4,
    where: {
      limitedPeriodDiscountProductId: 1,
    },
    select: {
      id: true,
      mainCategoryId: true,
      subCategoryId: true,
      monthlyThemeProductId: true,
      limitedPeriodDiscountProductId: true,
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
      discountRate: 'desc',
    },
  });

  const newProduct = await prisma.product.findMany({
    take: 4,
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
      isNew: 'desc',
    },
  });

  const includeRatingProduct = await prisma.product.findMany({
    take: 4,
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

  return [monthlyTheme, limitPeriodDiscount, newProduct, includeRatingProduct];
};

export default { getProductsMainPage };
