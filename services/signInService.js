import { signInDao } from '../models';
import bcrypt from 'bcrypt';

const signInUser = async userInfo => {
  const result = await signInDao.signInUser(userInfo);
  const isValidPw = bcrypt.compare(userInfo.password, result.password);
  return isValidPw;
};

export default { signInUser };

// const makeHash = async (password) => {
//   return await bcrypt.hash(password, 10)
// }
// ,
// const main = async () => {
//   const hashedPassword = await makeHash('mySimplePassword');
//   console.log('hashedPassword: ', hashedPassword)
// }

// main()

// const password = 'abcd1234'; //user input password
// const hashed = bcrypt.hash(password, 10); // salt길이 지정

// user input과 hashed를 비교해서 true, false 반환
// const result = bcrypt.compare(password, hashed);
