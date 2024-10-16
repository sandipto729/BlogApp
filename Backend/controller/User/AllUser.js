const userModel = require('../../models/User/UserModel');

const AllUser = async (req, res) => {
    try {
        const users = await userModel.find();
        // console.log(users);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = AllUser;