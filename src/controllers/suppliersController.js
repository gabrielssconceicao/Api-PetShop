const SupplierRepository = require('../repositories/SupplierRepository');
class SuppliersController {
  constructor() {
    this.repository = new SupplierRepository();
  }
  async findAll() {
    try {
      const data = await this.repository.findAll();
      return { body: data, status: 200 };
    } catch (error) {
      return {
        error: 'An error occurred while fetching suppliers',
        status: 500,
      };
    }
  }

  async create(body) {
    try {
      console.log(body.company);
      const data = {
        company: body.company,
        email: body.email,
        category: body.category,
      };
      const result = await this.repository.create(data);
      return { body: result, status: 201 };
    } catch (error) {
      console.log(error);
      return {
        error: 'An error occurred while creating supplier',
        status: 500,
      };
    }
  }
}

module.exports = SuppliersController;
