var express = require('express');
var router = express.Router();
var axios = require('axios')
/* GET users listing. */
router.use(express.static('public'));
router.get('/', function(req, res, next) {
    res.render('index', { title: 'index' });

});

module.exports = router;