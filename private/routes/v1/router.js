// const express = require("express");
const router = require("express").Router();

// router.use("/api/v1/", require("./Users/auth.controller"));

router.use("/api/v1", require("./Users/auth.controller"))
router.use("/api/v1/user", require("./Onboarding/onboarding.controller"))


module.exports = router;
