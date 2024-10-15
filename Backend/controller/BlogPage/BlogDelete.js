const BlogModel=require('../../models/Blog/BlogModel');

const DeleteBlog=async(req,res)=>{
    const {id}=req.body;
    try {
        const blog=await BlogModel.findByIdAndDelete(id);
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports=DeleteBlog;