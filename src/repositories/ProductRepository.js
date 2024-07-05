const Product = require('../database/models/Products');
const database = require('../database');

class ProductsRepository {
  async findAll(supplierId) {
    return Product.findAll({
      where: {
        supplierId,
      },
    });
  }

  async findOne({ supplierId, productId }) {
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

  async update({ fieldsToUpdate, productId, supplierId }) {
    return Product.update(fieldsToUpdate, {
      where: {
        id: productId,
        supplierId,
      },
    });
  }

  async delete({ supplierId, productId }) {
    return Product.destroy({
      where: {
        id: productId,
        supplierId,
      },
    });
  }
}

module.exports = ProductsRepository;
