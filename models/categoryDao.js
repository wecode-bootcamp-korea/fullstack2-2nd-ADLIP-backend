import prisma from '../prisma';

const categories = async () => {
  const categories = await prisma.mainCategory.findMany({
    select: {
      id: true,
      mainCategoryName: true,
      mainCategoryImageUrl: true,
      SubCategory: true,
    },
  });

  return categories;
};

export default { categories };

// const categories = async () => {
//   const categories = await prisma.mainCategory.findMany({
//     select: {
//       id: true,
//       mainCategoryName: true,
//       mainCategoryImageUrl: true,
//       SubCategory: true,
//     },
//   });

//   return categories;
// };
