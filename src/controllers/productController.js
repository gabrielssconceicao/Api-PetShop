const ProductRepository = require('../repositories/ProductsRepository');

class ProductController {
  repository = new ProductRepository();

  async findAll(supplierId) {
    try {
      const products = await this.repository.findAll(supplierId);
      return {
        body: products.map(({ id, name, price, stock }) => ({
          id,
          name,
          price,
          stock,
        })),
        status: 200,
      };
    } catch (error) {
      return {
        error: 'An error occurred while fetching products',
        status: 500,
      };
    }
  }

  async create(body) {
    try {
      const { id, name, price, stock } = await this.repository.create(body);
      return {
        body: { id, name, price, stock },
        status: 201,
      };
    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        console.log(error);
        const messages = error.errors.map((err) => err.message);
        return {
          body: {
            error: messages,
          },
          status: 400,
        };
      }
      console.log(error);
      return {
        body: {
          error: 'An error occurred while creating product',
        },
        status: 500,
      };
    }
  }

  async delete(body) {
    try {
      await this.repository.delete(body);
      return {
        body: null,
        status: 204,
      };
    } catch (error) {
      return {
        body: {
          error: 'An error occurred while deleting product',
        },
        status: 500,
      };
    }
  }
}

module.exports = ProductController;
