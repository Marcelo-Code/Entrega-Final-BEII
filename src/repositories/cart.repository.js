import CartDAO from "../dao/cart.dao.js";
import CartDTO from "../dao/dto/cart.dto.js";

export default class CartRepository {
  constructor() {
    this.dao = new CartDAO();
  }

  getCarts = async () => {
    return await this.dao.getCarts();
  };

  getCartById = async (id) => {
    return await this.dao.getCartById(id);
  };

  updateCart = async (cid, pid, quantity) => {
    return await this.dao.updateCart(cid, pid, quantity);
  };
}
