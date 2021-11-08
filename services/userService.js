import { userDao } from '../models';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

const createJwtToken = async (email, status) => {
  const { JWT_SECRET_KEY, JWT_EXPIRES_IN_DAYS } = process.env;
  return jwt.sign({ email, status }, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRES_IN_DAYS,
  });
};

const createUser = async userInfo => {
  const { email } = userInfo;
  const existingUser = await userDao.findUserByEmail(email);
  if (existingUser) {
    throw new Error('이미 존재하는 유저입니다.');
  }
  const { BCRYPT_SALT_ROUNDS } = process.env;
  userInfo.password = await bcrypt.hash(
    userInfo.password,
    parseInt(BCRYPT_SALT_ROUNDS),
  );
  await userDao.createUser(userInfo);
  return { message: 'CREATED' };
};

const signInUser = async userInfo => {
  const { email } = userInfo;
  const existingUser = await userDao.findUserByEmail(email);
  if (existingUser === null) {
    throw new Error('존재하지 않는 아이디 입니다.');
  }
  const { password } = existingUser;
  const isValidUser = await bcrypt.compare(userInfo.password, password);
  if (!isValidUser) {
    throw new Error('비밀번호가 유효하지 않습니다.');
  }
  return createJwtToken(existingUser.email, existingUser.status);
};

const signInKakao = async (userInfo, body) => {
  const { status, socialPlatform } = body;
  const {
    email,
    profile: { nickname },
  } = await userInfo.kakao_account;
  const existingUser = await userDao.findUserByEmail(email);
  if (existingUser === null) {
    await userDao.createSocialUser({
      email,
      nickname,
      socialPlatform,
      status,
    });
    return createJwtToken(email, status);
  }
  if (existingUser.socialPlatform !== 'kakao') {
    throw new Error('이미 존재하는 아이디입니다.');
  }
  return createJwtToken(email, status);
};

export default { createUser, signInUser, signInKakao, createJwtToken };
