const Suppliers = require('../database/models/Suppliers');
class SupplierRepository {
  async findAll() {
    return Suppliers.findAll();
  }
}

module.exports = SupplierRepository;
