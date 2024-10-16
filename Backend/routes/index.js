const express = require('express');
const router = express.Router();


//BlogFetch
const GetBlog = require('../controller/BlogPage/Blog_fetch');
const GetBlogID = require('../controller/BlogPage/BlogFtechById');
const AllBlog = require('../controller/BlogPage/AllBlogs');
const SelectedBlog=require('../controller/BlogPage/BlogFetchByUserId');
const TempBlogFetch=require('../controller/TempBlog//TempBlogfetch');

//Blog Data by User
const  AddBlog = require('../controller/BlogPage/Blog_Entry'); 
const DeleteBlog = require('../controller/BlogPage/BlogDelete');
const TempBlogAdd=require('../controller/BlogPage/TempBlogAdd');
const DeleteTempBlog=require('../controller/TempBlog/TempDelete');
const TempToMain = require('../controller/TempBlog/TemptoMain');

//User
const Login = require('../controller/User/Login');
const SignUp = require('../controller/User/SignUp');
const ProfilePage = require('../controller/User/ProfilePage');
const AllUser=require('./../controller/User/AllUser');

//auth
const authToken = require('../middlewear/authToken');
//check UserRole
const checkUserRole = require('../helper/CheckUserRole');







//Blog By User
router.post('/adminaddBlog',authToken,checkUserRole,AddBlog);
router.post('/tempBlogAdd', authToken,TempBlogAdd);
router.post('/deleteTempBlog',authToken, checkUserRole, DeleteTempBlog);
router.post('/tempToMain',authToken, checkUserRole, TempToMain);


//BlogFetch
router.get('/getBlog', GetBlog);
router.post('/getBlogID', GetBlogID);
router.get('/allBlogs',authToken, checkUserRole, AllBlog);
router.get('/getSelectedBlog',authToken, SelectedBlog);
router.get('/tempBlogFetch',authToken, checkUserRole, TempBlogFetch);

//User 
router.post('/login', Login);
router.post('/signup', SignUp);
router.get('/profile', authToken, ProfilePage);
router.get('/alluser', authToken, checkUserRole, AllUser);


module.exports = router;
