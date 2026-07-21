const authService = require("../services/auth.service");
const generateToken = require("../utils/generateToken");

exports.signup = async (req, res) => {

    try {

        const user = await authService.createUser(req.body);

        res.status(201).json({
            success: true,
            message: "Registration Successful",
        });

    } catch (err) {

        res.status(400).json({
            success: false,
            message: err.message,
        });

    }

};

exports.login = async (req, res) => {

    try {

        const user = await authService.loginUser(
            req.body.email,
            req.body.password
        );

        const token = generateToken(user._id);

        // Remove password from user object before sending
        const userResponse = {
            _id: user._id,
            name: user.name,
            email: user.email,
        };

        res.json({
            success: true,
            token,
            user: userResponse,
        });

    } catch (err) {

        res.status(400).json({
            success: false,
            message: err.message,
        });

    }

};