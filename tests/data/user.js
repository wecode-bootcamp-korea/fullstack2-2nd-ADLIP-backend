export const kakaoResData = {
  data: {
    id: 1972900677,
    connected_at: '2021-11-08T06:38:05Z',
    properties: {
      nickname: 'test',
      profile_image:
        'http://k.kakaocdn.net/dn/hrDBD/btqP0tT6JCf/LZZ5teIFV6AmnB9bLdFJlK/img_640x640.jpg',
      thumbnail_image:
        'http://k.kakaocdn.net/dn/hrDBD/btqP0tT6JCf/LZZ5teIFV6AmnB9bLdFJlK/img_110x110.jpg',
    },
    kakao_account: {
      profile_nickname_needs_agreement: false,
      profile_image_needs_agreement: false,
      profile: {
        nickname: 'test',
        thumbnail_image_url:
          'http://k.kakaocdn.net/dn/hrDBD/btqP0tT6JCf/LZZ5teIFV6AmnB9bLdFJlK/img_110x110.jpg',
        profile_image_url:
          'http://k.kakaocdn.net/dn/hrDBD/btqP0tT6JCf/LZZ5teIFV6AmnB9bLdFJlK/img_640x640.jpg',
        is_default_image: false,
      },
      has_email: true,
      email_needs_agreement: false,
      is_email_valid: true,
      is_email_verified: true,
      email: 'test001@gmail.com',
    },
  },
};

export const validSignUpData = {
  email: 'test001@gmail.com',
  nickname: 'test001',
  password: '$2b$10$lwNK89KNzGd5BVE.gCFqReEHEqukVac.4NJJlPXLHUwMRS0CoF9ea',
  status: 'user',
  socialPlatform: 'local',
};

export const missingSocialPlatformSignUpData = {
  email: 'test001@gmail.com',
  nickname: 'test001',
  password: 'Qwer1234!@#$',
  status: 'user',
};

export const missingSatausSignUpData = {
  email: 'test001@gmail.com',
  nickname: 'test001',
  password: 'Qwer1234!@#$',
  socialPlatform: 'local',
};

export const missingPasswordSignUpData = {
  email: 'test001@gmail.com',
  nickname: 'test001',
  status: 'user',
  socialPlatform: 'local',
};

export const missingNicknameSignUpData = {
  email: 'test001@gmail.com',
  password: 'Qwer1234!@#$',
  status: 'user',
  socialPlatform: 'local',
};

export const missingEmailSignUpData = {
  nickname: 'test001',
  password: 'Qwer1234!@#$',
  status: 'user',
  socialPlatform: 'local',
};

export const invalidEmailSignUpData = {
  email: 'test001',
  nickname: 'test001',
  password: 'Qwer1234!@#$',
  status: 'user',
  socialPlatform: 'local',
};

export const invalidPasswordSignUpData = {
  email: 'test001@gmail.com',
  nickname: 'test001',
  password: 'Qwer',
  status: 'user',
  socialPlatform: 'local',
};

export const invalidStatusSignUpData = {
  email: 'test001@gmail.com',
  nickname: 'test001',
  password: 'Qwer1234!@#$',
  status: 'anything',
  socialPlatform: 'local',
};

export const invalidSocialPlatformSignUpData = {
  email: 'test001@gmail.com',
  nickname: 'test001',
  password: 'Qwer1234!@#$',
  status: 'user',
  socialPlatform: 'teadfst',
};

export const reqBodyForKakaoLogin = {
  status: 'user',
  socialPlatform: 'kakao',
};

export const missingSocialPlatformKakaoLogin = {
  status: 'user',
};

export const missingStatusKakaoLogin = {
  socialPlatform: 'kakao',
};

export const invalidSocialPlatformKakaoLogin = {
  socialPlatform: 'test',
  status: 'user',
};

export const invalidStatusKakaoLogin = {
  socialPlatform: 'kakao',
  status: 'test',
};

export const validSignInData = {
  email: 'test001@gmail.com',
  password: 'Qwer1234!@#$',
};

export const missingEmailSignInData = {
  password: 'Qwer1234!@#$',
};

export const missingPasswordSignInData = {
  email: 'test001@gmail.com',
};

export const invalidEmailSignInData = {
  email: 'test001@gmail12312',
  password: 'Qwer1234!@#$',
};

export const invalidPasswordSignInData = {
  email: 'test001@gmail.com',
  password: 'Qwer12',
};

export const incorrectPasswordSignInData = {
  email: 'test001@gmail.com',
  password: 'Qwer1234123$$',
};

export const incorrectEmailSignInData = {
  email: 'test002@gmail.com',
  password: 'Qwer1234!@#$',
};
export const KAKAO_AUTH_TOKEN = `kakaotokensomething`;
