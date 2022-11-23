const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
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
        type: Date,
        required: true
    },

    category: {
        type: String,
        enum: ['UR', 'SC', 'OBC/MOBC', 'ST(P)', 'ST(H)', 'EWS'],
        required: true
    },

    qualification: {
        type: String,
        enum: ['Graduate', 'Post-graduate'],
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

    disabilityPercentage: {
        type: Number
    },
    
    PwBD_UDID: {
        type: Number
    },

    PwBD_category: {
        type: String,
        enum: [
            'Blindness and low vision',
            'Deaf and hard of hearing',
            'Locomotor disability including cerebral palsy, leprosy cured, dwarfism, acid attack victims and muscular dystrophy',
            'Autism, intellectual disability, specific learning disability and mental illness'
        ]
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;