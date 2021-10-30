import { signUpDao } from '../models';
import bcrypt from 'bcrypt';

const createUser = async userInfo => {
  userInfo.password = await bcrypt.hash(userInfo.password, 10);
  return await signUpDao.createUser(userInfo);
};

export default { createUser };
