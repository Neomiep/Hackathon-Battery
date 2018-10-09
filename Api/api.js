const express = require('express');
let User = require('../Models/userModel');
const router = express.Router();

router.get('/users', function (req, res) {
  User.find().populate("selling").exec( (err, users) =>{
    if (err) {
      res.status(500).send(err);
    }
    res.send(users);
  })
});

router.post('/users/:firstname/:lastname/:username', function (req, res) {
  let username = req.params.username
  let firstname = req.params.firstname
  let lastname = req.params.lastname
  let NewUser = new User({firstName:firstname,lastName:lastname,userName:username})
  NewUser.save(function (err, data) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(data);
    }
  })
});



module.exports = router;