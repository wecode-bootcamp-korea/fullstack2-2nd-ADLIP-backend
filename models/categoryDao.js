import prisma from '../prisma';

const mainCategories = async () => {
  const mainCategories = await prisma.mainCategory.findMany({
    select: {
      id: true,
      mainCategoryName: true,
      mainCategoryImageUrl: true,
    },
  });

  return mainCategories;
};

const mainCategoriesProducts = async (mainId, rating) => {
  const mainCategoriesProductsByRating = await prisma.product.findMany({
    take: 4,
    where: {
      mainCategoryId: parseInt(mainId),
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
                orderBy: {
                  rating: 'desc',
                },
              },
            },
          },
        },
      },
    },
  });

  const mainCategoriesProductsByNew = await prisma.product.findMany({
    take: 4,
    where: {
      mainCategoryId: parseInt(mainId),
      isNew: true,
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
                orderBy: {
                  rating: 'desc',
                },
              },
            },
          },
        },
      },
    },
  });

  const mainCategoriesProductsByDiscount = await prisma.product.findMany({
    take: 4,
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
    orderBy: {
      discountRate: 'desc',
    },
  });

  const mainCategoriesProductsByOnly = await prisma.product.findMany({
    take: 4,
    where: {
      mainCategoryId: parseInt(mainId),
      isOnly: true,
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
  return [
    mainCategoriesProductsByRating,
    mainCategoriesProductsByNew,
    mainCategoriesProductsByDiscount,
    mainCategoriesProductsByOnly,
  ];
};

const subCategoriesProducts = async (mainId, subId, rating) => {
  const subCategoriesProductsByRating = await prisma.product.findMany({
    take: 4,
    where: {
      mainCategoryId: parseInt(mainId),
      subCategoryId: parseInt(subId),
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
                orderBy: {
                  rating: 'desc',
                },
              },
            },
          },
        },
      },
    },
  });

  const subCategoriesProductsByNew = await prisma.product.findMany({
    take: 4,
    where: {
      mainCategoryId: parseInt(mainId),
      subCategoryId: parseInt(subId),
      isNew: true,
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
                orderBy: {
                  rating: 'desc',
                },
              },
            },
          },
        },
      },
    },
  });

  const subCategoriesProductsByDiscount = await prisma.product.findMany({
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
    orderBy: {
      discountRate: 'desc',
    },
  });

  const subCategoriesProductsByOnly = await prisma.product.findMany({
    take: 4,
    where: {
      mainCategoryId: parseInt(mainId),
      subCategoryId: parseInt(subId),
      isOnly: true,
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
  return [
    subCategoriesProductsByRating,
    subCategoriesProductsByNew,
    subCategoriesProductsByDiscount,
    subCategoriesProductsByOnly,
  ];
};

export default {
  mainCategories,
  mainCategoriesProducts,
  subCategoriesProducts,
};
