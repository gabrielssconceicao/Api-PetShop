const Product = require('../database/models/Products');

class ProductsRepository {
  async findAll(supplierId) {
    return Product.findAll({
      where: {
        supplierId,
      },
    });
  }
}

module.exports = ProductsRepository;
