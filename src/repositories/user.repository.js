export default class UserRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getUserByEmail = (email) => this.dao.getByEmail(email);
  createUser = (user) => this.dao.create(user);
}