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

  async update(id, data) {
    return Suppliers.update(data, {
      where: {
        id,
      },
    });
  }

  async delete(id) {
    Suppliers.destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = SupplierRepository;
