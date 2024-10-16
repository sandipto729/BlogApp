const TempModel = require('./../../models/Blog/TempBlogModel');

const TempDelete = async (req, res) => {
    const id = req.body.id;
    try {
        const tempBlog = await TempModel.findByIdAndDelete(id);
        res.status(200).json(tempBlog);
    } catch (error) {
        res.status(500).json(error);
    }
};
module.exports = TempDelete;