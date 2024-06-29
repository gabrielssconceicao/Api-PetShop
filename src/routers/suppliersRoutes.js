const { Router } = require('express');
const controller = require('../controllers/suppliersController');
const router = Router();

router.get('/', async (req, res) => {
  try {
    const data = await controller.findAll();
    res.send(data);
  } catch (error) {
    res
      .status(500)
      .send({ error: 'An error occurred while fetching suppliers' });
  }
});

module.exports = router;
