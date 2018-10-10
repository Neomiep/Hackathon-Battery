const express = require('express');
let User = require('../Models/userModel');
const router = express.Router();

router.get('/users/:username', function (req, res) {
  let username = req.params.username
  User.find({userName:username}).populate('selling notification notification.user notification.user selling.user').exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    else{res.send(user)}
  })
})

router.post('/users/:firstname/:lastname/:username', function (req, res) {
  let username = req.params.username
  let firstname = req.params.firstname
  let lastname = req.params.lastname
  let NewUser = new User({ firstName: firstname, lastName: lastname, userName: username })
  NewUser.save(function (err, data) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(data);
    }
  })
});



module.exports = router;