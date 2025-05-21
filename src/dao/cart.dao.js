import cartModel from "./models/cart.model.js";

export default class CartDAO {
  createCart = async (newCart) => {
    try {
      const createdCart = await cartModel.create(newCart);
      return createdCart;
    } catch (error) {
      return error;
    }
  };

  getCarts = async () => {
    try {
      const carts = await cartModel.find();
      return carts;
    } catch (error) {
      return error;
    }
  };

  getCartById = async (id) => {
    try {
      const cart = await cartModel.findOne({ _id: id });
      return cart;
    } catch (error) {
      return error;
    }
  };

  updateCart = async (id, cart) => {
    try {
      const updatedCart = await cartModel.updateOne(
        { _id: id },
        { $set: cart }
      );
      return updatedCart;
    } catch (error) {
      return error;
    }
  };

  deleteCart = async (id) => {
    try {
      const deletedCart = await cartModel.deleteOne({ _id: id });
      return deletedCart;
    } catch (error) {
      return error;
    }
  };
}
