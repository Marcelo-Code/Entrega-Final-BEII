import { Router } from "express";
import {
  createCart,
  getCarts,
  getCartById,
  updateCart,
} from "../controllers/cart.controller.js";
import passport from "passport";

const router = Router();

//Sólo administradores pueden ver la totalidad de los carritos
router.get("/", passport.authenticate("admin", { session: false }), getCarts);

//Sólo los usuarios autenticados pueden ver sus carritos
router.get(
  "/:cid",
  passport.authenticate("cartUser", { session: false }),
  getCartById
);

//Sólo los usuarios autenticados pueden actualizar sus carritos	(agregar productos al carrito)
router.put(
  "/:cid/:pid",
  passport.authenticate("cartUser", { session: false }),
  updateCart
);

export default router;
