import cartModel from "./models/cart.model.js";
import productModel from "./models/product.models.js";

export default class CartDAO {
  getCarts = async () => {
    try {
      const carts = await cartModel.find();
      return carts;
    } catch (error) {
      throw error;
    }
  };

  getCartById = async (id) => {
    try {
      const cart = await cartModel.findOne({ _id: id });
      return cart;
    } catch (error) {
      throw error;
    }
  };

  updateCart = async (cid, pid, quantity) => {
    try {
      // Verificar existencia del producto
      const product = await productModel.findById(pid);
      if (!product) {
        throw new Error("Producto no encontrado");
      }

      // Validar stock suficiente
      if (product.stock < quantity) {
        throw new Error(`Stock insuficiente. Disponible: ${product.stock}`);
      }

      // verificar existencia del carrito
      const cart = await cartModel.findById(cid);
      if (!cart) {
        throw new Error("Carrito no encontrado");
      }

      // Verificar si el producto ya está en el carrito
      const productInCart = cart.products.find(
        (p) => p.product.toString() === pid
      );

      if (productInCart) {
        // Si se encuentra el producto, sumar cantidad existente más la nueva cantidad
        const newQuantity = productInCart.quantity + quantity;

        productInCart.quantity = newQuantity;
      } else {
        // Agregar nuevo producto al carrito
        cart.products.push({ product: pid, quantity });
      }

      // Guardar carrito actualizado
      await cart.save();

      // Descontar stock del producto
      product.stock -= quantity;
      await product.save();

      // Devolver carrito actualizado
      return await cartModel.findById(cid).populate("products.product");
    } catch (error) {
      throw new Error("Error al actualizar el carrito: " + error.message);
    }
  };
}
