const express = require('express');

var mongoose = require('mongoose');

const app = express();

app.use(express.json())

require('./controller/auth')(app)
require('./controller/user')(app)
require('./controller/prescription')(app)

app.listen(3100)