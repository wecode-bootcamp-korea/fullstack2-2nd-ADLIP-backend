import { validationResult, body } from 'express-validator';

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array()[0].msg });
};

export const validator = [
  body('email')
    .exists()
    .withMessage('email 키가 없습니다')
    .bail()
    .isEmail()
    .withMessage('올바른 email을 입력해주세요')
    .bail()
    .normalizeEmail(),
  body('password')
    .exists()
    .withMessage('password 키가 없습니다.')
    .trim()
    .notEmpty()
    .withMessage('password를 입력해주세요')
    .bail()
    .custom(value => {
      const regexPassword =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#\$%\^&\*]).{8,}$/;
      const isNotValidPassword = !regexPassword.test(value);
      if (isNotValidPassword) {
        return Promise.reject(
          '비밀번호는 최소 하나의 대문자, 소문자, 특수문자, 숫자를 포함하고 있어야합니다.',
        );
      }
      return value;
    }),
  body('nickname')
    .exists()
    .withMessage('nickname 키가 없습니다.')
    .bail()
    .notEmpty()
    .withMessage('nickname을 입력해주세요.')
    .bail()
    .trim(),
  body('status')
    .exists()
    .withMessage('status 키가 없습니다.')
    .notEmpty()
    .withMessage('일반유저 또는 호스트유저를 선택하세요.'),
  body('socialPlatform')
    .exists()
    .withMessage('socialPlatfrom 키가 없습니다.')
    .notEmpty()
    .withMessage('social platform 을 선택하세요'),
  validate,
];
