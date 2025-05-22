import CartRepository from "../repositories/cart.repository.js";
const cartService = new CartRepository();

export const getCarts = async (req, res) => {
  try {
    let result = await cartService.getCarts();
    res
      .status(200)
      .json({ message: "carritos obtenidos exitosamente", carts: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener carritos", error: error.message });
  }
};

export const getCartById = async (req, res) => {
  try {
    let result = await cartService.getCartById(req.params.cid);
    res
      .status(200)
      .json({ message: "carrito obtenido exitosamente", cart: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener carrito", error: error.message });
  }
};

export const updateCart = async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const { quantity } = req.body;
    let result = await cartService.updateCart(cid, pid, quantity);
    res
      .status(200)
      .json({ message: "producto agregado a carrito exitosamente", result });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error al agregar producto al carrito",
        error: error.message,
      });
  }
};
