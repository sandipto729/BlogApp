const BlogModel = require('../../models/Blog/BlogModel');

const GetBlogID = async (req, res) => {
    try {
        console.log(req.body.id);
        const id = req.body.id;
        const blog = await BlogModel.findById(id);
        res.status(200).json({
            success: true,
            data: blog
        });
    }catch(err){
        res.status(500).json(err);
    }
    
}

module.exports = GetBlogID;