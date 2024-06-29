const SupplierRepository = require('../repositories/SupplierRepository');
class SuppliersController {
  repository = new SupplierRepository();

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
  async findOne(id) {
    try {
      const data = await this.repository.findOne(id);
      if (!data) {
        return {
          body: {
            error: 'Supplier not found',
          },
          status: 404,
        };
      }
      return { body: data, status: 200 };
    } catch (error) {
      return {
        body: {
          error: 'An error occurred while fetching supplier',
        },
        status: 500,
      };
    }
  }

  async create(body) {
    try {
      const result = await this.repository.create(body);
      return { body: result, status: 201 };
    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        const messages = error.errors.map((err) => err.message);
        return {
          body: messages,
          status: 400,
        };
      }
      return {
        body: {
          error: 'An error occurred while creating supplier',
        },
        status: 500,
      };
    }
  }
}

module.exports = SuppliersController;
