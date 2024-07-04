const SupplierController = require('../controllers/supplierController');

module.exports = async (req, res, next) => {
  try {
    const controller = new SupplierController();
    const { body, status } = await controller.findOne(req.params.supplierId);

    if (status === 404) {
      res.status(status).send(body);
      return;
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};
