const mongoose=require('mongoose');

const TempBlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: true
    },
    authorImage: {
        type: String,
        
    },
    authorId:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

module.exports=mongoose.model('TempBlog',TempBlogSchema);
