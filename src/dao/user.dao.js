import userModel from "../dao/models/user.model.js";
import { createHash } from "../utils.js";
import UserDTO from "./dto/user.dto.js";
import cartModel from "./models/cart.model.js";
export default class UserDAO {
  async createUser(newUser) {
    try {
      const {
        first_name,
        last_name,
        age,
        email,
        password,
        repeat_password,
        role,
      } = newUser;

      // Validación: Campos obligatorios
      if (
        !first_name ||
        !last_name ||
        !age ||
        !email ||
        !password ||
        !repeat_password
      ) {
        throw new Error("Hay campos pendientes de completar");
      }

      // Validación: Contraseñas coinciden
      if (password !== repeat_password) {
        throw new Error("Las contraseñas no coinciden");
      }

      // Validación: email duplicado
      const existingUser = await this.getUserByEmail(email);
      if (existingUser) {
        throw new Error("Ya existe un usuario con ese email");
      }

      // Crear carrito vacío
      const newCart = await cartModel.create({ products: [] });

      // Preparar datos del usuario
      const userToCreate = {
        ...newUser,
        password: createHash(password),
        cart: newCart._id,
      };
      delete userToCreate.repeat_password;

      const userDTO = new UserDTO(userToCreate);

      return await userModel.create(userDTO);
    } catch (error) {
      throw error;
    }
  }

  getUsers = async () => {
    try {
      const users = await userModel.find();
      return users;
    } catch (error) {
      throw error;
    }
  };

  getUserById = async (id) => {
    try {
      const user = await userModel.findOne({ _id: id });
      return user;
    } catch (error) {
      throw error;
    }
  };

  getUserByEmail = async (email) => {
    try {
      const user = await userModel.findOne({ email: email });
      return user;
    } catch (error) {
      throw error;
    }
  };

  updateUser = async (id, user) => {
    try {
      const updatedUser = await userModel.updateOne(
        { _id: id },
        { $set: user }
      );
      return updatedUser;
    } catch (error) {
      throw error;
    }
  };
}
