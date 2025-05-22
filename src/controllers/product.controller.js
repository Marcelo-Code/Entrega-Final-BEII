import ProductRepository from "../repositories/product.repository.js";

const productService = new ProductRepository();

export const createProduct = async (req, res) => {
  try {
    let result = await productService.createProduct(req.body);
    res
      .status(200)
      .json({ message: "producto creado exitosamente", product: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear producto", error: error.message });
  }
};
export const getProducts = async (req, res) => {
  try {
    let result = await productService.getProducts();
    res
      .status(200)
      .json({ message: "productos obtenidos exitosamente", products: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener productos", error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    let result = await productService.getProductById(req.params.pid);
    res
      .status(200)
      .json({ message: "Producto obtenido exitosamente", product: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener producto", error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    let result = await productService.updateProduct(req.params.pid, req.body);
    res
      .status(200)
      .json({ message: "producto actualizado exitosamente", product: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al actualizar producto", error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    let result = await productService.deleteProduct(req.params.pid);
    res
      .status(200)
      .json({ message: "producto eliminado exitosamente", product: result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar producto", error: error.message });
  }
};
