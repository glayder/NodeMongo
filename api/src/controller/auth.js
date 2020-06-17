const express = require('express');
var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const authConfig = require

require('../models/User');
const User = mongoose.model('user')

const router = express.Router();

router.post('/authenticate', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password')
  
  if (!user)
  return res.status(400).send({ error: 'nao existe usuario' })
  
  console.log(password,'e ', user.password);
  if (!await bcrypt.compare(password, user.password))
    return res.status(400).send({ error: 'invalid password' })
  
  const token= jwt.sign({ id: user.id }, authConfig.secret, {
    expiresIn: 86400,
  })
  res.send({ user, token })
});

module.exports = app => app.use('/auth', router)