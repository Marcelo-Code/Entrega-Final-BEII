import ProductDTO from "../dao/dto/product.dto.js";
import ProductDAO from "../dao/product.dao.js";

export default class ProductRepository {
  constructor() {
    this.dao = new ProductDAO();
  }

  createProduct = async (newProduct) => {
    const productToCreate = new ProductDTO(newProduct);
    return await this.dao.createProduct(productToCreate);
  };

  getProducts = async () => {
    return await this.dao.getProducts();
  };

  getProductById = async (id) => {
    return await this.dao.getProductById(id);
  };

  updateProduct = async (id, product) => {
    let productToUpdate = new ProductDTO(product);
    return await this.dao.updateProduct(id, productToUpdate);
  };

  deleteProduct = async (id) => {
    return await this.dao.deleteProduct(id);
  };
}
