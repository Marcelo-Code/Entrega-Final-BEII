import UserRepository from "../repositories/user.repository.js";

const userService = new UserRepository();

export const createUser = async (req, res) => {
  try {
    let result = await userService.createUser(req.body);
    res
      .status(200)
      .json({ message: "Usuario creado exitosamente", user: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear usuario", error: error.message });
  }
};
export const getUsers = async (req, res) => {
  try {
    let result = await userService.getUsers();
    res
      .status(200)
      .json({ message: "Usuarios obtenidos exitosamente", users: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener usuarios", error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    let result = await userService.getUserById(req.params.uid);
    res
      .status(200)
      .json({ message: "Usuario obtenido exitosamente", user: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener usuario", error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    let result = await userService.updateUser(req.params.uid, req.body);
    res
      .status(200)
      .json({ message: "Usuario actualizado exitosamente", user: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar usuario", error: error.message });
  }
};
