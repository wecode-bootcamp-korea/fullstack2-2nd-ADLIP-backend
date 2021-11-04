import { productService } from '../services';

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const productById = await productService.getProductById(id);
    res.status(200).json(productById);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

const getCommentsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { query } = req;
    const commentById = await productService.getCommentsById(id, query);
    res.status(200).json(commentById);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

export default { getProductById, getCommentsById };
