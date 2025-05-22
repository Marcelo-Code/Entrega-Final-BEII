import productModel from "./models/product.models.js";

export default class ProductDAO {
  createProduct = async (newProduct) => {
    try {
      const createdProduct = await productModel.create(newProduct);
      return createdProduct;
    } catch (error) {
      throw error;
    }
  };

  getProducts = async () => {
    try {
      const products = await productModel.find();
      return products;
    } catch (error) {
      throw error;
    }
  };

  getProductById = async (id) => {
    try {
      const product = await productModel.findOne({ _id: id });
      return product;
    } catch (error) {
      throw error;
    }
  };

  updateProduct = async (id, product) => {
    try {
      const updatedProduct = await productModel.updateOne(
        { _id: id },
        { $set: product }
      );
      return updatedProduct;
    } catch (error) {
      throw error;
    }
  };

  deleteProduct = async (id) => {
    try {
      const deletedProduct = await productModel.deleteOne({ _id: id });
      return deletedProduct;
    } catch (error) {
      throw error;
    }
  };
}
