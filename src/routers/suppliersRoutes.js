const { Router } = require('express');
const SuppliersController = require('../controllers/suppliersController');
const router = Router();

router.get('/', async (req, res) => {
  const controller = new SuppliersController();
  const { body, status } = await controller.findAll();
  res.status(status).send(body);
});

router.post('/', async (req, res) => {
  const controller = new SuppliersController();
  const { body, status } = await controller.create(req.body);
  res.status(status).send(body);
});

module.exports = router;
