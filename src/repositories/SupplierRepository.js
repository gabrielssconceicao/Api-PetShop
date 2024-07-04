const Suppliers = require('../database/models/Suppliers');
const ProductsRepository = require('./ProductRepository');
const SupplierWithProductsError = require('../errors/SupplierWithProductsError');
class SupplierRepository {
  async findAll() {
    return Suppliers.findAll();
  }

  async create(data) {
    return Suppliers.create(data);
  }

  async findOne(id) {
    return Suppliers.findByPk(id);
  }

  async update(id, data) {
    return Suppliers.update(data, {
      where: {
        id,
      },
    });
  }

  async delete(id) {
    const products = await new ProductsRepository().findAll(id);
    if (products.length > 0) {
      throw new SupplierWithProductsError(
        'Cannot delete supplier with products'
      );
    }
    Suppliers.destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = SupplierRepository;
