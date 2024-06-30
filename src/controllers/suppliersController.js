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
    const errors = [];
    if (!body.company || body.company.length < 3 || body.company.length > 255) {
      errors.push('Company must be between 3 and 255 characters');
    }

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      errors.push('Invalid email');
    }

    if (!['food', 'toys'].includes(body.category)) {
      errors.push('Category must be food or toys');
    }

    if (errors.length > 0) {
      return {
        body: {
          error: errors,
        },
        status: 400,
      };
    }

    try {
      const result = await this.repository.create(body);
      return { body: result, status: 201 };
    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        const messages = error.errors.map((err) => err.message);
        return {
          body: {
            error: messages,
          },
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

  async update(id, body) {
    try {
      const result = await this.findOne(id);
      if (result.status === 404) {
        return result;
      }
      const fields = ['company', 'email', 'category'];
      const fieldsToUpdate = {};
      fields.forEach((field) => {
        if (body[field]) {
          fieldsToUpdate[field] = body[field];
        }
      });

      if (Object.keys(fieldsToUpdate).length === 0) {
        return {
          body: {
            error: 'No fields to update',
          },
          status: 400,
        };
      }

      await this.repository.update(id, fieldsToUpdate);
      return {
        body: [],
        status: 204,
      };
    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        const messages = error.errors.map((err) => err.message);
        return {
          body: {
            error: messages,
          },
          status: 400,
        };
      }

      return {
        body: {
          error: 'An error occurred while updating supplier',
        },
        status: 500,
      };
    }
  }

  async delete(id) {
    try {
      const supplier = await this.findOne(id);
      if (supplier.status === 404) {
        return supplier;
      }

      await this.repository.delete(id);
      return {
        body: {
          message: 'Supplier deleted successfully',
        },
        status: 200,
      };
    } catch (error) {
      return {
        body: {
          error: 'An error occurred while deleting supplier',
        },
        status: 500,
      };
    }
  }
}

module.exports = SuppliersController;
