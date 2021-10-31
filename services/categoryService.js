import { categoryDao } from '../models';

const categories = async () => {
  const mainCategories = await categoryDao.categories();
  if (!mainCategories) console.log('main_category_404err?!');
  return mainCategories;
};

export default { categories };
