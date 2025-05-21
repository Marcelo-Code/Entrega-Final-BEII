export default class ProductDTO {
  constructor(product) {
    this.description = product.description;
    this.price = product.price;
    this.category = product.category;
    this.stock = product.stock;
  }
}
