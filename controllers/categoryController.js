import { categoryService } from '../services';

const categories = async (req, res) => {
  try {
    const mainCategories = await categoryService.categories();
    res.status(200).json({
      message: 'CREATED',
      data: mainCategories,
    });
  } catch (err) {
    console.log(err);
  }
};

export default { categories };
