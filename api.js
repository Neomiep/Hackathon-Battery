const express = require('express');
let User = require('./Models/userModel');
const router = express.Router();

router.get('/users', function (req, res) {
  User.find({}, function (err, users) {
    if (err) {
      res.status(500).send(err);
    }
    res.send(users);
  })
});

router.post('/users', function (req, res) {
  let NewUser = new User(req.body)
  NewUser.save(function (err, data) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(data);
    }
  })
});



module.exports = router;