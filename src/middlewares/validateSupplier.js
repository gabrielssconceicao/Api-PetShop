const SupplierController = require('../controllers/supplierController');

module.exports = async (req, res, next) => {
  try {
    const controller = new SuppliersController();
    const { body, status } = await controller.findOne(req.params.idSupplier);

    if (status === 200) {
      next();
    } else {
      res.status(status).send(body);
    }
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};
