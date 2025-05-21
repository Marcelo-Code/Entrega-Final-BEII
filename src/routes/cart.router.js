import { Router } from "express";
import {
  createCart,
  getCarts,
  getCartById,
  updateCart,
  deleteCart,
} from "../controllers/cart.controller.js";

const router = Router();

router.post("/", createCart);
router.get("/", getCarts);
router.get("/:cid", getCartById);
router.put("/:cid", updateCart);
router.delete("/:cid", deleteCart);

export default router;
