const ProductRepository = require('../repositories/ProductsRepository');

class ProductController {
  repository = new ProductRepository();

  async findAll(supplierId) {
    try {
      console.log(supplierId);
      const products = await this.repository.findAll(supplierId);
      return {
        body: products,
        status: 200,
      };
    } catch (error) {
      return {
        error: 'An error occurred while fetching products',
        status: 500,
      };
    }
  }
}

module.exports = ProductController;
