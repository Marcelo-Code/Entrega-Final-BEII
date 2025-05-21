import UserRepository from "../repositories/user.repository.js";

const userService = new UserRepository();

export const createUser = async (req, res) => {
  let result = await userService.createUser(req.body);
  res.status(200).json(result);
};
export const getUsers = async (req, res) => {
  let result = await userService.getUsers();
  res.status(200).json(result);
};

export const getUserById = async (req, res) => {
  let result = await userService.getUserById(req.params.uid);
  res.status(200).json(result);
};

export const updateUser = async (req, res) => {
  let result = await userService.updateUser(req.params.uid, req.body);
  res.status(200).json(result);
};

export const deleteUser = async (req, res) => {
  let result = await userService.deleteUser(req.params.uid);
  res.status(200).json(result);
};
