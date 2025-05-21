import CartRepository from "../repositories/cart.repository.js";
const cartService = new CartRepository();

export const createCart = async (req, res) => {
  let result = await cartService.createCart(req.body);
  res.status(200).json(result);
};
export const getCarts = async (req, res) => {
  let result = await cartService.getCarts();
  res.status(200).json(result);
};

export const getCartById = async (req, res) => {
  let result = await cartService.getCartById(req.params.cid);
  res.status(200).json(result);
};

export const updateCart = async (req, res) => {
  let result = await cartService.updateCart(req.params.cid, req.body);
  res.status(200).json(result);
};

export const deleteCart = async (req, res) => {
  let result = await cartService.deleteCart(req.params.cid);
  res.status(200).json(result);
};
