const userModel=require('./../../models/User/UserModel');
const BlogModel=require('./../../models/Blog/BlogModel');

const fetchBlogController=async(req,res)=>{
    try{
        const userID=req.user._id;
        const blog=await BlogModel.find({authorId:userID});
        res.status(200).json(blog);
    }catch(err){
        res.status(500).json(err);
    }
}
module.exports=fetchBlogController;