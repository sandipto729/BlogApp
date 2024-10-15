const UserModel=require('../../models/User/UserModel');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');


const SignUp = async (req, res) => {
    const { username, password, email, name, phone, dob } = req.body;
    const newUser = new UserModel({
        username,
        password,
        email,
        name,
        phone,
        dob,
        role: "user"
    });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json(
            error
        );
    }
}

module.exports = SignUp;