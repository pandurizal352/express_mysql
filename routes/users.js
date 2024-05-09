var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// kode yang di tambahkan di modul
router.get('/', function (req, res) {
  console.log(req.method)
  res.send('Halo Gamelab')
 });

 const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.post('/', function (req, res) {
 console.log(req.body)
 res.send('Data sudah diterima')
})


module.exports = router;
