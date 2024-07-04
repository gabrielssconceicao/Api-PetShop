class SupplierWithProductsError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'SupplierWithProductsError';
  }
}

module.exports = SupplierWithProductsError;
