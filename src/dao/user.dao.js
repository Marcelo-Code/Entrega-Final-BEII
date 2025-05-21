import userModel from "../dao/models/user.model.js";
export default class UserDAO {
  createUser = async (newUser) => {
    try {
      const createdUser = await userModel.create(newUser);
      return createdUser;
    } catch (error) {
      return error;
    }
  };

  getUsers = async () => {
    try {
      const users = await userModel.find();
      return users;
    } catch (error) {
      return error;
    }
  };

  getUserById = async (id) => {
    try {
      const user = await userModel.findOne({ _id: id });
      return user;
    } catch (error) {
      return error;
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
      return error;
    }
  };

  deleteUser = async (id) => {
    try {
      const deletedUser = await userModel.deleteOne({ _id: id });
      return deletedUser;
    } catch (error) {
      return error;
    }
  };
}
