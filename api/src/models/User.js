// const mongoose = require('mongoose');
const mongoose = require('../database');
const bcrypt = require('bcryptjs')

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    cpf: {
        type: String,
        required: true
    },
    dateBirth: {
        type: String,
        required: true
    },
    crm: {
        type: String,
        required: true
    },
    stateCrm: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

User.pre('save', async function(next) {
    const hash =  await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
})

mongoose.model('user', User);