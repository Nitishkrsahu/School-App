const User = require('../models/user')
const bcrypt = require("bcryptjs");

const createUser = async (data) => {

    const userExists = await User.findOne({
        email: data.email,
    });

    if (userExists) {
        throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return await User.create({
        name: data.name,
        email: data.email,
        password: hashedPassword,
    });
};

const loginUser = async (email, password) => {

    const user = await User.findOne({ email });

    if (!user)
        throw new Error("Invalid Email");

    const match = await bcrypt.compare(
        password,
        user.password
    );

    if (!match)
        throw new Error("Invalid Password");

    return user;
};

module.exports = {
    createUser,
    loginUser,
};