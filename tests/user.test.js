import request from 'supertest';
import app from '../app';
import prisma from '../prisma';
import axios from 'axios';
jest.mock('axios');

import {
  kakaoResData,
  validSignUpData,
  missingSocialPlatformSignUpData,
  missingSatausSignUpData,
  missingPasswordSignUpData,
  missingNicknameSignUpData,
  missingEmailSignUpData,
  invalidEmailSignUpData,
  invalidPasswordSignUpData,
  invalidStatusSignUpData,
  invalidSocialPlatformSignUpData,
  reqBodyForKakaoLogin,
  missingStatusKakaoLogin,
  invalidSocialPlatformKakaoLogin,
  invalidStatusKakaoLogin,
  KAKAO_AUTH_TOKEN,
  validSignInData,
  missingEmailSignInData,
  missingPasswordSignInData,
  invalidEmailSignInData,
  invalidPasswordSignInData,
  incorrectPasswordSignInData,
  incorrectEmailSignInData,
} from './data/user';

beforeEach(async () => {
  await prisma.user.deleteMany();
});

afterEach(async () => {
  await prisma.user.deleteMany();
});

describe('/user/signup : 1', () => {
  test('create user in local: 1', async () => {
    await request(app) //
      .post('/user/signup')
      .send(validSignUpData)
      .expect(200, {
        message: 'CREATED',
      });
  });
});

describe('/user/signup : 0', () => {
  beforeEach(async () => {
    await prisma.user.deleteMany();
    jest.clearAllMocks();
  });
  test('create user in local: 0 - (missing social platform key)', async () => {
    await request(app) //
      .post('/user/signup')
      .send(missingSocialPlatformSignUpData)
      .expect(400, {
        message: 'social platform 키가 없습니다.',
      });
  });
  test('create user in local: 0 - (missing status key)', async () => {
    await request(app) //
      .post('/user/signup')
      .send(missingSatausSignUpData)
      .expect(400, {
        message: 'status 키가 없습니다.',
      });
  });
  test('create user in local: 0 - (missing password key)', async () => {
    await request(app) //
      .post('/user/signup')
      .send(missingPasswordSignUpData)
      .expect(400, {
        message: 'password 키가 없습니다.',
      });
  });
  test('create user in local: 0 - (missing nickname key)', async () => {
    await request(app) //
      .post('/user/signup')
      .send(missingNicknameSignUpData)
      .expect(400, {
        message: 'nickname 키가 없습니다.',
      });
  });
  test('create user in local: 0 - (missing email key)', async () => {
    await request(app) //
      .post('/user/signup')
      .send(missingEmailSignUpData)
      .expect(400, {
        message: 'email 키가 없습니다',
      });
  });
});

describe('/user/signup : -1', () => {
  test('create user in local: -1 - (invalid email)', async () => {
    await request(app) //
      .post('/user/signup')
      .send(invalidEmailSignUpData)
      .expect(400, {
        message: '올바른 email을 입력해주세요',
      });
  });
  test('create user in local: -1 - (invalid password)', async () => {
    await request(app) //
      .post('/user/signup')
      .send(invalidPasswordSignUpData)
      .expect(400, {
        message:
          '비밀번호는 최소 하나의 대문자, 소문자, 특수문자, 숫자를 포함하고 있어야합니다.',
      });
  });
  test('create user in local: -1 - (invalid status)', async () => {
    await request(app) //
      .post('/user/signup')
      .send(invalidStatusSignUpData)
      .expect(400, {
        message: 'status는 host나 user이여야 합니다.',
      });
  });
  test('create user in local: -1 - (invalid social platform)', async () => {
    await request(app) //
      .post('/user/signup')
      .send(invalidSocialPlatformSignUpData)
      .expect(400, {
        message: 'social platform은 kakao 또는 local이여야 합니다.',
      });
  });
  test('create user in local: -1 - (already existing user)', async () => {
    await prisma.user.create({
      data: {
        email: 'test002@gmail.com',
        nickname: 'test001',
        password: 'Qwer1234!@#$',
        status: 'user',
        socialPlatform: 'local',
      },
    });
    await request(app) //
      .post('/user/signup')
      .send({
        email: 'test002@gmail.com',
        nickname: 'test001',
        password: 'Qwer1234!@#$',
        status: 'user',
        socialPlatform: 'local',
      })
      .expect(400, { message: '이미 존재하는 유저입니다.' });
  });
});

describe('/user/kakao : 1', () => {
  test('sign in with kakao: 1', async () => {
    axios.get.mockReturnValue(Promise.resolve(kakaoResData));

    const response = await request(app) //
      .post('/user/kakao')
      .set('authorization', 'kakaotoken')
      .send(reqBodyForKakaoLogin);

    expect(200);
    expect(response.body).toHaveProperty('token');
  });
});

describe('/user/kakao : 0', () => {
  test('sign in with kakao: 0 - (missing kakao api token)', async () => {
    await request(app) //
      .post('/user/kakao')
      .send(reqBodyForKakaoLogin)
      .expect(400, {
        message: 'access token이 없습니다',
      });
  });
  test('sign in with kakao: 0 - (missing social platform key)', async () => {
    axios.get.mockReturnValue(Promise.resolve(kakaoResData));
    await request(app) //
      .post('/user/kakao')
      .set('authorization', 'kakaotoken')
      .send(missingSocialPlatformSignUpData)
      .expect(400, {
        message: 'social platform 키가 없습니다.',
      });
  });
  test('sign in with kakao: 0 - (missing status key)', async () => {
    axios.get.mockReturnValue(Promise.resolve(kakaoResData));
    await request(app) //
      .post('/user/kakao')
      .set('authorization', 'kakaotoken')
      .send(missingStatusKakaoLogin)
      .expect(400, {
        message: 'status 키가 없습니다.',
      });
  });
});

describe('/user/kakao : -1', () => {
  test('sign in with kakao: -1 - (invalid social platform key)', async () => {
    axios.get.mockReturnValue(Promise.resolve(kakaoResData));
    await request(app) //
      .post('/user/kakao')
      .set('authorization', KAKAO_AUTH_TOKEN)
      .send(invalidSocialPlatformKakaoLogin)
      .expect(400, {
        message: 'social platform은 kakao 또는 local이여야 합니다.',
      });
  });
  test('sign in with kakao: -1 - (invalid status key)', async () => {
    axios.get.mockReturnValue(Promise.resolve(kakaoResData));
    await request(app) //
      .post('/user/kakao')
      .set('authorization', KAKAO_AUTH_TOKEN)
      .send(invalidStatusKakaoLogin)
      .expect(400, {
        message: 'status는 host나 user이여야 합니다.',
      });
  });
  test('sign in with kakao: -1 - (already exist email)', async () => {
    await prisma.user.create({
      data: validSignUpData,
    });
    axios.get.mockReturnValue(Promise.resolve(kakaoResData));
    await request(app) //
      .post('/user/kakao')
      .set('authorization', KAKAO_AUTH_TOKEN)
      .send(reqBodyForKakaoLogin)
      .expect(400, {
        message: '이미 존재하는 아이디입니다.',
      });
  });
});

describe('/user/signin : 1', () => {
  test('sign in with local:', async () => {
    await prisma.user.create({
      data: validSignUpData,
    });
    const response = await request(app) //
      .post('/user/signin')
      .send(validSignInData);
    expect(200);
    expect(response.body).toHaveProperty('token');
  });
});

describe('/user/signin : 0', () => {
  test('sign in with local: 0 - (missing email key)', async () => {
    await request(app) //
      .post('/user/signin')
      .send(missingEmailSignInData)
      .expect(400, { message: 'email 키가 없습니다' });
  });
  test('sign in with local: 0 - (missing password key)', async () => {
    await request(app) //
      .post('/user/signin')
      .send(missingPasswordSignInData)
      .expect(400, { message: 'password 키가 없습니다.' });
  });
});

describe('/user/signin : -1', () => {
  test('sign in with local: -1 (invalid email key)', async () => {
    await request(app) //
      .post('/user/signin')
      .send(invalidEmailSignInData)
      .expect(400, { message: '올바른 email을 입력해주세요' });
  });

  test('sign in with local: -1 (invalid password key)', async () => {
    await request(app) //
      .post('/user/signin')
      .send(invalidPasswordSignInData)
      .expect(400, {
        message:
          '비밀번호는 최소 하나의 대문자, 소문자, 특수문자, 숫자를 포함하고 있어야합니다.',
      });
  });

  test('sign in with local: -1 (incorrect password)', async () => {
    await prisma.user.create({
      data: validSignUpData,
    });
    await request(app) //
      .post('/user/signin')
      .send(incorrectPasswordSignInData)
      .expect(400, { message: '비밀번호가 유효하지 않습니다.' });
  });

  test('sign in with local: -1 (incorrect email)', async () => {
    await prisma.user.create({
      data: validSignUpData,
    });
    await request(app) //
      .post('/user/signin')
      .send(incorrectEmailSignInData)
      .expect(400, { message: '존재하지 않는 아이디 입니다.' });
  });
});
