const mongoose = require('mongoose');

const photoGrapherSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    national_id: {
        type: String,
        required: false,
    },
    guarantor_phone_number: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    application_status: {
        type: Boolean,
        required: false,
    },
    onboarded: {
        type: Boolean,
        required: false,
        default: false
    }
});

module.exports = mongoose.model('PhotoGrapher', photoGrapherSchema);