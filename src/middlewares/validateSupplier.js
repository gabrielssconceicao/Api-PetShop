const SuppliersController = require('../controllers/suppliersController');
module.exports = async (req, res, next) => {
  const controller = new SuppliersController();
  const { body, status } = await controller.findOne(req.params.idSupplier);
  if (status === 200) {
    next();
  }
  res.status(status).send(body);
};
