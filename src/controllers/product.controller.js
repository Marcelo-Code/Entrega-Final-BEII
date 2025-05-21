import ProductRepository from "../repositories/product.repository.js";

const productService = new ProductRepository();

export const createProduct = async (req, res) => {
  let result = await productService.createProduct(req.body);
  res.status(200).json(result);
};
export const getProducts = async (req, res) => {
  let result = await productService.getProducts();
  res.status(200).json(result);
};

export const getProductById = async (req, res) => {
  let result = await productService.getProductById(req.params.pid);
  res.status(200).json(result);
};

export const updateProduct = async (req, res) => {
  let result = await productService.updateProduct(req.params.pid, req.body);
  res.status(200).json(result);
};

export const deleteProduct = async (req, res) => {
  let result = await productService.deleteProduct(req.params.pid);
  res.status(200).json(result);
};
