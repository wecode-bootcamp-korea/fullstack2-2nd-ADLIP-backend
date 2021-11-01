import { tupleExpression } from '@babel/types';
import { prisma, Prisma } from '../prisma';

const signInUser = async userInfo => {
  const { email } = userInfo;
  return await prisma.user.findFirst({
    select: {
      email: true,
      password: true,
    },
    where: {
      email,
    },
  });
};

export default { signInUser };
