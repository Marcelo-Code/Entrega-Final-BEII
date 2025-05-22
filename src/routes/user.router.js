import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";
import passport from "passport";
const router = Router();

//Los usuarios se crean en la registración
router.post("/", createUser);

//Obtener todos los usuarios, solamente los admins
router.get("/", passport.authenticate("admin", { session: false }), getUsers);

//Obtener un usuario por id, solamente los admins
router.get(
  "/:uid",
  passport.authenticate("admin", { session: false }),
  getUserById
);

//Modificar un usuario, solamente los admins
router.put(
  "/:uid",
  passport.authenticate("admin", { session: false }),
  updateUser
);
export default router;
