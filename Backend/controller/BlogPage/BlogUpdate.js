const BlogModel=require('../../models/Blog/BlogModel');

const UpdateBlog=async(req,res)=>{
    const id=req.body._id;
    try {
        const blog=await BlogModel.findById(id);
        blog.title=req.body.title;
        blog.content=req.body.content;
        blog.author=req.body.author;
        blog.category=req.body.category;
        blog.image=req.body.image;
        blog.authorId=req.body.authorId;
        blog.authorImage=req.body.authorImage;
        blog.description=req.body.description;
        blog.date=req.body.date;
        await blog.save();
        res.status(200).json({
            success:true,
            data:blog
        });
    } catch (error) {
        res.status(500).json(error);
    }
}   

module.exports=UpdateBlog