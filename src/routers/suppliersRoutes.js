const { Router } = require('express');
const SuppliersController = require('../controllers/suppliersController');
const router = Router();

router.get('/', async (req, res) => {
  const controller = new SuppliersController();
  const data = await controller.findAll();
  res.json(data);
});

module.exports = router;
