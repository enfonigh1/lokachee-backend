const { default: mongoose } = require("mongoose");

const onboardingSchema = new mongoose.Schema({
    id: {
        type: mongoose.SchemaTypes.ObjectId,
        require: false
    },
    photography: {
        type: Boolean,
        required: false
    },
    editing: {
        type: Boolean,
        required: false
    },
    full_name: {
        type: String,
        required: true
    },
    studio_name: {
        type: String,
        required: true
    },
    studio_location: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    worked_with_us: {
        type: Boolean,
        required: false
    },
    accepted_terms: {
        type: Boolean,
        required: false
    },
    headshots: [],
    outdoor: [],
    events: [],
}, { timestamps: true })

module.exports = mongoose.model("onboard", onboardingSchema)