import { signInService } from '../services';

const signInUser = async (req, res, next) => {
  const test = await signInService.signInUser(req.body);
  if (test) {
    return res.send('login!!');
  } else {
    return res.send('failed!');
  }
};

export default { signInUser };
