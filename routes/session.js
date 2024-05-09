var express = require('express');
var router = express.Router();
/* GET session listing. */
router.get('/', (req, res) => {
 req.session.counter = req.session.counter ? req.session.counter + 1 : 1;
 res.send(`Kamu telah mengunjungi halaman ini sebanyak ${req.session.counter} kali.`);
 });

//set session data user
var sessionData
router.get('/set_session',function(req,res){
 sessionData = req.session;
 sessionData.user = {};
 let username = "Gamelab";
 sessionData.user.username = username;
 sessionData.user.id = Math.random();
 console.log("Setting session data:username=%s and salary=%s", username, sessionData.user.id)
 res.json(sessionData.user)
});

//get session data user
router.get('/get_session',function(req,res){
    sessionData = req.session;
    let userObj = {};
    if(sessionData.user) {
    userObj = sessionData.user;
    }
    console.log("Get data pada :username ", userObj)
    res.json(userObj)
    });

//destroy session
router.get('/destroy_session',function(req,res){
    sessionData = req.session;
    sessionData.destroy(function(err) {
    if(err){
    msg = 'Ada kesalahan dalam destroy session';
    res.json(msg);
    }else{
    msg = 'Session destroy berhasil';
    console.log(msg)
    res.json(msg);
    }
    });
   });

module.exports = router;