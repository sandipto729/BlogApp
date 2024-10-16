const UserModel = require("./../models/User/UserModel");

const CheckUserRole = async (req, res, next) => {
    try {
        const user = await UserModel.findById(req.user._id);
        if (user.role !== "admin") {
            return res.status(403).json({ message: "Access denied" });
        }
        next();
    } catch (error) {
        res.status(500).json(error);
    }
};
module.exports = CheckUserRole