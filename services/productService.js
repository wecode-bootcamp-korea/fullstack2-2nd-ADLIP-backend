import { productDao } from '../models';
import _ from 'lodash';

const getProductById = async id => {
  const totalCountOfProducts = await productDao.getTotalCountOfProducts();
  if (id > totalCountOfProducts) {
    throw new Error('해당하는 상품은 없습니다');
  }
  const product = await productDao.getProductById(id);
  return product;
};

export default { getProductById };
