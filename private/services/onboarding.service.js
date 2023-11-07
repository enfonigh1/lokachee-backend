const Onboarding = require("../schema/Onboarding");

async function onboarding(req, res) {
    try {
        const results = await Onboarding.create({ ...req?.body })
        if (results) {
            return res.json({ status: 200, message: "success" })
        }
    } catch (error) {
        return res.json({ status: 400, message: error.message })
    }

}

module.exports = { onboarding }