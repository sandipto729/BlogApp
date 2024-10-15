const BlogModel=require('../../models/Blog/BlogModel');
const userModel = require('../../models/User/UserModel');

const AddBlog=async(req,res)=>{
    const {title,description,image,content,category}=req.body;
    const authorId=req.user._id;
    const findAuthor=await userModel.findById(authorId);
    const author=findAuthor.name;
    
    const newBlog=new BlogModel({
        title,
        description,
        image,
        content,
        author,
        category,
        authorId
    });
    try {
        const savedBlog=await newBlog.save();
        res.status(200).json(savedBlog);
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports=AddBlog;
