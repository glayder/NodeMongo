const express = require('express');
var mongoose = require('mongoose');

require('../models/Prescription');

const Prescription = mongoose.model('prescription')

const router = express.Router();

router.post('/register', async (req, res, next) => {
  try {
    const user = await Prescription.create(req.body);
    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

router.delete('/remove/:id', async (req, res, next) => {
  Prescription.findByIdAndRemove({ _id: req.params.id }).then(function (pi) {
    res.send(pi);
  }).catch(next);
});

router.put('/update/:id', async (req, res, next) => {
  Prescription.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Prescription.findOne({ _id: req.params.id }).then(function (ip) {
      res.send(ip);
    });
  }).catch(next);
});

router.get('/list', async (req, res, next) => {
  Prescription.find({}).then(function (pi) {
    res.send(pi);
  }).catch(next);;
});

module.exports = app => app.use('/prescription', router)