const mongoose = require('mongoose');
const { Schema } = mongoose;

const applicantSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },

    middlename: {
        type: String,
    },
    
    lastname: {
        type: String,
        required: true
    },

    dob: {
        type: String,
        required: true
    },

    category: {
        type: String,
        enum: ['UR', 'SC', 'OBC/MOBC', 'ST(P)', 'ST(H)', 'EWS'],
        required: true
    },

    qualification: {
        type: String,
        enum: ['Graduate', 'Post-Graduate'],
        required: true
    },

    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true
    },

    gender: {
        type: String,
        enum: ['Male', 'Female', 'Others'],
        required: true
    },


    registrationId: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

});

const Applicant = mongoose.model('applicant', applicantSchema);

module.exports = Applicant;