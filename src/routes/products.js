
const express = require('express');
const { renderUploadProductView, renderSuccessProductCreate } = require('../controllers/products');
const router = express.Router();


router.get('/cargar-producto', renderUploadProductView);
router.post('/cargar-producto-backend',renderSuccessProductCreate );

module.exports = router;