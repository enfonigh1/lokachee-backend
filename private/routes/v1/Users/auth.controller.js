const { generateTokens } = require("../../../helpers/token");
const PhotoGrapher = require("../../../schema/PhotoGrapher");
const { registerValidation } = require("./validation/validate");
const encrypted = require("../../../helpers/encrpted")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const router = require("express").Router()

// REGISTER PHOTOGRAPHER
router.post("/register", async (req, res) => {
    const { full_name, email, password } = req?.body;

    // Validate Request
    const { error } = registerValidation(req.body);
    if (error) {
        return res.json({
            status: 400,
            data: error.details[0].message.replace(/"/g, ""),
        });
    }

    // Check if Email Exist
    const emailExists = await PhotoGrapher.findOne({ email: email });
    if (emailExists) return res.json({ status: 400, message: "User already exists" });

    const user = new PhotoGrapher({
        // full_name: full_name,
        email: email,
        password: encrypted(password),
    });
    try {


        const saveUser = await user.save();
        // const { accessToken } = await generateTokens(saveUser);

        if (saveUser) {
            return res.json({ status: 200, message: "User created successfully", data: saveUser })
        }
    } catch (error) {
        return res.json({ status: 400, message: error.message })

    }
});

// LOGIN USER
// LOGIN ENDPOINT
router.post("/signin", async (req, res) => {
    const { email, password } = req?.body;

    //check if email exists & comparing passwords
    const user = await PhotoGrapher.findOne({ email: email });
    if (!user) return res.json({ status: 400, message: "Invalid credentials" });

    // Encrypt Password
    const validPass = await bcrypt.compareSync(password, user?.password);
    if (!validPass) return res.json({ status: 400, message: "Invalid password" });

    // if (user?.verified === false) return res.json({ status: 400, message: "Please verify your email address", verified: false });
    const { accessToken, refreshToken } = await generateTokens(user);
    // res?.cookie('token', accessToken, { maxAge: 3600000, httpOnly: true });


    res.header("auth-token", accessToken).json({
        status: 200,
        message: "Login successful",
        name: user?.full_name,
        email: user?.email,
        user_id: user?._id,
        phone_number: user?.phone_number,
        onboarded: user?.onboarded,
        accessToken,
        refreshToken,
        accessTokenExpiresAt: 2592000,
        refreshTokenExpireAt: 2592000,
    });
});

// 

module.exports = router