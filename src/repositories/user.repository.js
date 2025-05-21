import UserDAO from "../dao/user.dao.js";
import UserDTO from "../dao/dto/user.dto.js";
export default class UserRepository {
  constructor() {
    this.dao = new UserDAO();
  }

  createUser = async (newUser) => {
    userToCreate = new UserDTO(newUser);
    return await this.dao.createUser(userToCreate);
  };

  getUsers = async () => {
    return await this.dao.getUsers();
  };

  getUserById = async (id) => {
    return await this.dao.getUserById(id);
  };

  updateUser = async (id, user) => {
    let userToUpdate = new UserDTO(user);
    return await this.dao.updateUser(id, userToUpdate);
  };

  deleteUser = async (id) => {
    return await this.dao.deleteUser(id);
  };
}
