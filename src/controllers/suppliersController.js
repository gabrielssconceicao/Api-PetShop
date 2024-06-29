const Suppliers = require('../database/models/Suppliers');

module.exports = {
  async findAll() {
    try {
      const suppliers = await Suppliers.findAll();
      return suppliers;
    } catch (error) {
      throw error;
    }
  },
};
