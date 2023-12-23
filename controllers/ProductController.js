const BaseController = require("./BaseController");

class ProductController extends BaseController {
  getAll = async () => {
    try {
      const products = await this.db.select("*").from("products");
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

  getById = async (productId) => {
    try {
      const product = await this.db
        .select("*")
        .from("products")
        .where({
          id: productId,
        })
        .first();
      return product;
    } catch (error) {
      console.error(`Error fetching product with ID ${productId}:`, error);
      throw error;
    }
  };

  create = async (productData) => {
    try {
      const [productId] = await this.db("products").insert(productData);
      const createdProduct = await this.getById(productId);
      return createdProduct;
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  };
}

module.exports = new ProductController();
