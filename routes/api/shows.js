var express = require('express');
var router = express.Router();
var showsCtrl = require('../../controllers/shows');



router.post('/', showsCtrl.create);


module.exports = router;