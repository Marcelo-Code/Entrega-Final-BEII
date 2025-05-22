import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import passport from "passport";
const router = Router();

//Crear productos, solamente los admins
router.post(
  "/",
  passport.authenticate("admin", { session: false }),
  createProduct
);

//Obtener todos los productos
router.get("/", getProducts);

//Obtener un producto por id
router.get("/:pid", getProductById);

//Modificar un producto, solamente los admins
router.put(
  "/:pid",
  passport.authenticate("admin", { session: false }),
  updateProduct
);

//Eliminar productos, solamente los admins
router.delete(
  "/:pid",
  passport.authenticate("admin", { session: false }),
  deleteProduct
);

export default router;
