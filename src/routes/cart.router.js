import { Router } from "express";
import {
  getCarts,
  getCartById,
  updateCart,
} from "../controllers/cart.controller.js";
import passport from "passport";
import { checkCartOwnership } from "../middlewares/cart.middleware.js";

const router = Router();

//Sólo administradores pueden ver la totalidad de los carritos
router.get("/", passport.authenticate("admin", { session: false }), getCarts);

//Sólo los usuarios logueados pueden ver sus carritos
router.get(
  "/:cid",
  passport.authenticate("cartUser", { session: false }),
  checkCartOwnership,
  getCartById
);

//Sólo los usuarios logueados pueden actualizar sus carritos	(agregar productos al carrito)
router.put(
  "/:cid/:pid",
  passport.authenticate("cartUser", { session: false }),
  checkCartOwnership,
  updateCart
);

export default router;
