import { signUpService } from '../services';

const createUser = async (req, res, next) => {
  await signUpService.createUser(req.body);
  return res.send('created!');
};

export default { createUser };
