import CartDAO from "../dao/cart.dao.js";
import CartDTO from "../dao/dto/cart.dto.js";

export default class CartRepository {
  constructor() {
    this.dao = new CartDAO();
  }

  createCart = async (newCart) => {
    const cartToCreate = new CartDTO(newCart);
    return await this.dao.createCart(cartToCreate);
  };

  getCarts = async () => {
    return await this.dao.getCarts();
  };

  getCartById = async (id) => {
    return await this.dao.getCartById(id);
  };

  updateCart = async (id, cart) => {
    let cartToUpdate = new CartDTO(cart);
    return await this.dao.updateCart(id, cartToUpdate);
  };

  deleteCart = async (id) => {
    return await this.dao.deleteCart(id);
  };
}
