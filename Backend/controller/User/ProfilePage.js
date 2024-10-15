const UserModel = require('../../models/User/UserModel');

const ProfilePage = async (req, res) => {
    const userID = req.user._id;
    // console.log(userID);
    try{
        const user = await UserModel.findById(userID);
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports = ProfilePage;