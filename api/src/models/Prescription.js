// const mongoose = require('mongoose');
const mongoose = require('../database');

const Prescription = new mongoose.Schema({
    CRM: {
        type: String,
        required: true
    },
    CRMRegistrationsStatus: {
        type: String,
        required: true
    },
    DoctorCPF: {
        type: String,
        required: true
    },
    DoctorName: {
        type: String,
        required: true
    },
    PatientCPF: {
        type: String,
        required: true
    },
    PatientName: {
        type: String,
        required: true
    },
    PatientDateBirth: {
        type: String,
        required: true
    },
    DrugsWithDescription: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    dosage: {
        type: String,
        required: true
    },
    frequencyUse: {
        type: String,
        required: true
    },
});

mongoose.model('prescription', Prescription);