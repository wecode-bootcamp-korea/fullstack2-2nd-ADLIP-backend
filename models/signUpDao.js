import { prisma, Prisma } from '../prisma';

const createUser = async userInfo => {
  const { email, password, nickname, status, socialPlatform } = userInfo;
  return await prisma.user.create({
    data: {
      email,
      nickname,
      password,
      status,
      socialPlatform,
    },
  });
};

export default { createUser };
