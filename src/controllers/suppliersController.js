const SupplierRepository = require('../repositories/SupplierRepository');
class SuppliersController {
  constructor() {
    this.repository = new SupplierRepository();
  }
  async findAll() {
    try {
      const data = await this.repository.findAll();
      return data;
    } catch (error) {
      return { error: 'An error occurred while fetching suppliers' };
    }
  }
}

module.exports = SuppliersController;
