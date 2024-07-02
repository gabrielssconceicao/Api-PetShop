const Product = require('../database/models/Products');

class ProductsRepository {
  async findAll(supplierId) {
    return Product.findAll({
      where: {
        supplierId,
      },
    });
  }

  async findOne(supplierId, productId) {
    return Product.findOne({
      where: {
        id: productId,
        supplierId,
      },
    });
  }

  async create(data) {
    return Product.create(data);
  }

  async update({ fieldsToUpdate, ...data }) {
    return Product.update(fieldsToUpdate, { where: data });
  }

  async delete(data) {
    return Product.destroy({ where: data });
  }
}

module.exports = ProductsRepository;
