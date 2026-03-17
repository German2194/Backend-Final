import User from '../models/user.model.js';

export default class UserDAO {
  getByEmail = (email) => User.findOne({ email });
  create = (user) => User.create(user);
}