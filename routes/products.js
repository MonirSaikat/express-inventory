const router = require('express').Router();
const productController = require('../controllers/ProductController');

router.get('/', async (req, res) => {
    return res.json(await productController.getAll());
});

router.get('/:id', async (req, res) => {
    return res.json(await productController.getById(req.params.id));
});


module.exports = router;