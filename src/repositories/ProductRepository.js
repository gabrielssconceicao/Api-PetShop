const Product = require('../database/models/Products');

class ProductsRepository {
  async findAll(supplierId) {
    return Product.findAll({
      where: {
        supplierId,
      },
    });
  }

  async create(data) {
    return Product.create(data);
  }

  async delete(data) {
    return Product.destroy({ where: data });
  }
}

module.exports = ProductsRepository;
