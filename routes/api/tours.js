var express = require('express');
var router = express.Router();
var toursCtrl = require('../../controllers/tours');


router.post('/get', toursCtrl.index);
router.post('/', toursCtrl.create);
router.post('/:id', toursCtrl.delete);
router.put('/:id', toursCtrl.update);

module.exports = router;