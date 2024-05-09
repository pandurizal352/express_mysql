var express = require('express');
var router = express.Router();
var homeController = require('../controller').home;
var profileController = require('../controller').profile;
var verifyUser = require('../library/verify');
router.get('/', verifyUser.isLogin, homeController.home);
router.get('/profile', verifyUser.isLogin, profileController.profile);
module.exports = router;


// kodingan sebelum auth

// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
