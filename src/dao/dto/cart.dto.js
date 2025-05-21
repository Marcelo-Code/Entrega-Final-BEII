export default class CartDTO {
  constructor(cart) {
    this.products = cart.products.map((product) => ({
      productId: product.productId || product._id || product.id,
      quantity: product.quantity,
    }));
  }
}
