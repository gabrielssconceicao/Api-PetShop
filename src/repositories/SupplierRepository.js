const Suppliers = require('../database/models/Suppliers');
class SupplierRepository {
  async findAll() {
    return Suppliers.findAll();
  }

  async create(data) {
    return Suppliers.create(data);
  }
}

module.exports = SupplierRepository;
