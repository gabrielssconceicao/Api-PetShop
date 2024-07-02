const Product = require('../database/models/Products');
const database = require('../database');

class ProductsRepository {
  async findAll(supplierId) {
    return Product.findAll({
      where: {
        supplierId,
      },
    });
  }

  async findOne(supplierId, productId) {
    return Product.findOne({
      where: {
        id: productId,
        supplierId,
      },
    });
  }

  async create(data) {
    return Product.create(data);
  }

  async update({ fieldsToUpdate, ...data }) {
    return Product.update(fieldsToUpdate, { where: data });
  }

  async delete(data) {
    return Product.destroy({ where: data });
  }

  async reduceStock({ id, supplierId, stock }) {
    const transaction = await database.transaction();
    try {
      await Product.update(
        { stock },
        { where: { id, supplierId }, transaction }
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      // throw new Error('Error reducing stock');
    }
  }
}

module.exports = ProductsRepository;
