var express = require('express');
var router = express.Router();
// var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;

// User.findOne({}, function(err, doc) {
    //     if (err) {
    //         return res.send('Error');
    //     }
    //     res.render('node', {email: doc.email});
    // });

// router.post('/', function (req, res, next) {
//     var email = req.body.email;
//     var user = new User({
//         firstName: 'Pablo',
//         lastName: 'Enriquez',
//         password: 'super-secret',
//         email: email
//     });
//     user.save();
//     res.redirect('/');
// });