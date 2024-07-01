const SuppliersController = require('../controllers/suppliersController');

module.exports = async (req, res, next) => {
  try {
    const controller = new SuppliersController();
    const { body, status } = await controller.findOne(req.params.idSupplier);

    if (status === 200) {
      req.supplier = body; // Armazena o fornecedor encontrado no objeto req para uso posterior
      next(); // Chama o próximo middleware ou rota
    } else {
      res.status(status).send(body);
    }
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};
