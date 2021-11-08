import prisma from '../prisma';

const createUser = async userInfo => {
  const { email, password, nickname, status } = userInfo;
  return await prisma.user.create({
    data: {
      email,
      nickname,
      password,
      status,
    },
  });
};

const createSocialUser = async userInfo => {
  const { email, nickname, status, socialPlatform } = userInfo;
  return await prisma.user.create({
    data: {
      email,
      nickname,
      password: '',
      status,
      snsId: email,
      socialPlatform,
    },
  });
};

const findUserByEmail = async email => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return user;
};

export default { createUser, createSocialUser, findUserByEmail };
