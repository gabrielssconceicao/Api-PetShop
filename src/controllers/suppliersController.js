const SupplierRepository = require('../repositories/SupplierRepository');
const responses = require('../helpers/responses');
class SuppliersController {
  repository = new SupplierRepository();

  deserialize(data) {
    const { id, company, category } = data;
    return { id, company, category };
  }

  async findAll() {
    try {
      const suppliers = await this.repository.findAll();
      return responses.ok(
        suppliers.map((supplier) => this.deserialize(supplier))
      );
    } catch (error) {
      return responses.internalServerError(
        'An error occurred while fetching suppliers'
      );
    }
  }
  async findOne(id) {
    try {
      const supplier = await this.repository.findOne(id);
      if (!supplier) {
        return responses.notFound('Supplier not found');
      }

      return responses.ok(this.deserialize(supplier));
    } catch (error) {
      console.log(error);
      return responses.internalServerError(
        'An error occurred while fetching supplier'
      );
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
      return responses.badRequest(errors);
    }

    try {
      const supplier = await this.repository.create(body);

      return responses.created(this.deserialize(supplier));
    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        const errors = error.errors.map((err) => err.message);
        return responses.badRequest(errors);
      }
      return internalServerError('An error occurred while creating supplier');
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
        return responses.badRequest('No fields to update');
      }

      await this.repository.update(id, fieldsToUpdate);
      return responses.noContent();
    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        const errors = error.errors.map((err) => err.message);
        return responses.badRequest(errors);
      }

      return responses.internalServerError(
        'An error occurred while updating supplier'
      );
    }
  }

  async delete(id) {
    try {
      const supplier = await this.findOne(id);
      if (supplier.status === 404) {
        return supplier;
      }

      await this.repository.delete(id);
      return responses.noContent();
    } catch (error) {
      return responses.internalServerError(
        'An error occurred while deleting supplier'
      );
    }
  }
}

module.exports = SuppliersController;
