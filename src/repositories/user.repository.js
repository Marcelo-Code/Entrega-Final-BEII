import UserDAO from "../dao/user.dao.js";
import UserDTO from "../dao/dto/user.dto.js";
import cartModel from "../dao/models/cart.model.js";
import { createHash } from "../utils.js";
export default class UserRepository {
  constructor() {
    this.dao = new UserDAO();
  }

  createUser = async (newUser) => {
    return await this.dao.createUser(newUser);
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
}
