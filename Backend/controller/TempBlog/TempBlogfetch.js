const TempBlogModel=require('./../../models/Blog/TempBlogModel');

const TempBlogFetch=async(req,res)=>{
    try {
        const tempBlog=await TempBlogModel.find();
        res.status(200).json(tempBlog);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports=TempBlogFetch;
