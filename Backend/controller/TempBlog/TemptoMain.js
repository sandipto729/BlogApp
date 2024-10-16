const TempBlogModel = require('../../models/Blog/TempBlogModel');
const BlogModel = require('../../models/Blog/BlogModel');

const TempToMain = async (req, res) => {
  const id  = req.body.id; 
  try {

    const tempBlog = await TempBlogModel.findByIdAndDelete(id);
    if (!tempBlog) {
      return res.status(404).json({ message: 'Temp blog not found' });
    }

    const blogData = {
      title: tempBlog.title,
      content: tempBlog.content,
      author: tempBlog.author,
      category: tempBlog.category,
      image: tempBlog.image,
      authorId: tempBlog.authorId,
      authorImage: tempBlog.authorImage,
      description: tempBlog.description,
      date: tempBlog.date
    };

    // Create the blog in the main BlogModel
    const newBlog = await BlogModel.create(blogData);

    res.status(200).json(newBlog);
  } catch (error) {
    console.error('Error moving temp blog to main blog:', error);
    res.status(500).json({ error: 'Failed to move blog' });
  }
};

module.exports = TempToMain;
