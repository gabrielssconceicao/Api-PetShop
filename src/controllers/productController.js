const ProductRepository = require('../repositories/ProductRepository');
const responses = require('../helpers/responses');
const Validator = require('../helpers/validator');
class ProductController {
  repository = new ProductRepository();
  validator = new Validator();

  validateCreateProduct(product) {
    const errors = [];

    if (this.validator.validateString(product.name, 3, 255)) {
      errors.push('Product name must be between 3 and 255 characters');
    }

    if (this.validator.isPositiveInteger(product.stock)) {
      errors.push('Stock must be a positive integer number');
    }

    if (this.validator.isPositiveFloat(product.price)) {
      errors.push('Price must be a positive float number');
    }

    return errors;
  }
  validateUpdateProduct(product) {
    const errors = [];

    if (product.name && this.validator.validateString(product.name, 3, 255)) {
      errors.push('Product name must be between 3 and 255 characters');
    }

    if (product.stock && !this.validator.isPositiveInteger(product.stock)) {
      errors.push('Stock must be a positive integer number');
    }

    if (product.price && !this.validator.isPositiveFloat(product.price)) {
      errors.push('Price must be a positive float number');
    }
    return errors;
  }

  getUpdateProduct(product) {
    const fields = ['name', 'price', 'stock'];
    const fieldsToUpdate = {};
    fields.forEach((field) => {
      if (product[field]) {
        fieldsToUpdate[field] = product[field];
      }
    });

    return fieldsToUpdate;
  }

  deserialize(product) {
    const { id, name, price, stock } = product;
    return { id, name, price, stock };
  }

  async findAllBySupplier(supplierId) {
    try {
      const products = await this.repository.findAll(supplierId);
      return responses.ok(products.map((product) => this.deserialize(product)));
    } catch (error) {
      return responses.internalServerError(
        'An error occurred while fetching products'
      );
    }
  }

  async findOne({ supplierId, productId }) {
    try {
      const product = await this.repository.findOne({ supplierId, productId });
      if (!product) {
        return responses.notFound('Product not found');
      }
      return responses.ok(this.deserialize(product));
    } catch (error) {
      return responses.internalServerError(
        'An error occurred while fetching product'
      );
    }
  }

  async create({ supplierId, ...body }) {
    console.log(body);
    try {
      const errors = this.validateCreateProduct(body);

      if (errors.length) {
        return responses.badRequest(errors);
      }
      const product = await this.repository.create({ supplierId, ...body });
      return responses.created(this.deserialize(product));
    } catch (error) {
      console.log(error);
      if (error.name === 'SequelizeValidationError') {
        const messages = error.errors.map((err) => err.message);
        return responses.badRequest(messages);
      }
      return responses.internalServerError(
        'An error occurred while creating product'
      );
    }
  }

  async update({ supplierId, productId, ...body }) {
    try {
      const fieldsToUpdate = this.getUpdateProduct(body);
      if (Object.keys(fieldsToUpdate).length === 0) {
        return responses.badRequest('No fields to update');
      }

      const errors = this.validateUpdateProduct(body);
      console.log(errors);
      if (errors.length) {
        return responses.badRequest(errors);
      }

      await this.repository.update({ productId, supplierId, fieldsToUpdate });
      return responses.noContent();
    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        const messages = error.errors.map((err) => err.message);
        return responses.badRequest(messages);
      }
      return responses.internalServerError(
        'An error occurred while updating product'
      );
    }
  }

  async delete(body) {
    try {
      await this.repository.delete(body);
      return responses.noContent();
    } catch (error) {
      return responses.internalServerError(
        'An error occurred while deleting product'
      );
    }
  }
}

module.exports = ProductController;
