const BlogModel=require('../../models/Blog/BlogModel');

const AllBlog=async(req,res)=>{
    const blog=await BlogModel.find();
    res.status(200).json(blog);
}
module.exports=AllBlog;