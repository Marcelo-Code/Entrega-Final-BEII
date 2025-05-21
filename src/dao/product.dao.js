import productModel from "./models/product.models.js";

export default class ProductDAO {
  createProduct = async (newProduct) => {
    try {
      const createdProduct = await productModel.create(newProduct);
      return createdProduct;
    } catch (error) {
      return error;
    }
  };

  getProducts = async () => {
    try {
      const products = await productModel.find();
      return products;
    } catch (error) {
      return error;
    }
  };

  getProductById = async (id) => {
    try {
      const product = await productModel.findOne({ _id: id });
      return product;
    } catch (error) {
      return error;
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
      return error;
    }
  };

  deleteProduct = async (id) => {
    try {
      const deletedProduct = await productModel.deleteOne({ _id: id });
      return deletedProduct;
    } catch (error) {
      return error;
    }
  };
}
