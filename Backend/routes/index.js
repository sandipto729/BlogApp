const express = require('express');
const router = express.Router();


//BlogFetch
const GetBlog = require('../controller/BlogPage/Blog_fetch');
const GetBlogID = require('../controller/BlogPage/BlogFtechById');

//Blog Data by User
const  AddBlog = require('../controller/BlogPage/Blog_Entry'); 
const DeleteBlog = require('../controller/BlogPage/BlogDelete');

//User
const Login = require('../controller/User/Login');
const SignUp = require('../controller/User/SignUp');
const ProfilePage = require('../controller/User/ProfilePage');

//auth
const authToken = require('../middlewear/authToken');




//Blog By User
router.post('/addBlog', AddBlog);
router.delete('/deleteBlog', DeleteBlog);  

//BlogFetch
router.get('/getBlog', GetBlog);
router.post('/getBlogID', GetBlogID);

//User 
router.post('/login', Login);
router.post('/signup', SignUp);
router.get('/profile', authToken, ProfilePage);


module.exports = router;
