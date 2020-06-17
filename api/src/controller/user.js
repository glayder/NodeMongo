const express = require('express');
var mongoose = require('mongoose');

require('../models/User');

const User = mongoose.model('user')

const router = express.Router();

router.post('/register', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

router.delete('/remove/:id', async (req, res, next) => {
  User.findByIdAndRemove({ _id: req.params.id }).then(function (pi) {
    res.send(pi);
  }).catch(next);
});

router.put('/update/:id', async (req, res, next) => {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    User.findOne({ _id: req.params.id }).then(function (ip) {
      res.send(ip);
    });
  }).catch(next);
});

router.get('/list', async (req, res, next) => {
  User.find({}).then(function (pi) {
    res.send(pi);
  }).catch(next);;
});

module.exports = app => app.use('/user', router)