const { onboarding } = require("../../../services/onboarding.service");
const router = require("express").Router()

// CHECK IF PAYMENT IS MADE
router.post("/onboarding", async (req, res) => {
    try {
        return res.status(200).json(await onboarding(req, res));
    } catch (error) {

    }
});

module.exports = router