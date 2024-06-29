const Suppliers = require('../database/models/Suppliers');
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
}

module.exports = SupplierRepository;
