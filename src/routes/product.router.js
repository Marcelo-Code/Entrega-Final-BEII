import { Router } from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
const router = Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:pid", getProductById);
router.put("/:pid", updateProduct);
router.delete("/:pid", deleteProduct);

export default router;
