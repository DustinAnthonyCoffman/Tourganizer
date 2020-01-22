var express = require('express');
var router = express.Router();
var toursCtrl = require('../../controllers/tours');


router.get('/', toursCtrl.index);
router.get('/:id', toursCtrl.show);
router.post('/', toursCtrl.create);
router.delete('/:id', toursCtrl.delete);
router.put('/:id', toursCtrl.update);

module.exports = router;