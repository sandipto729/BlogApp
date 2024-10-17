import { createBrowserRouter } from 'react-router-dom';

import App from './../App';
import BlogPage from './../pages/cardFetch/cardFetch';
import BlogDetails from '../pages/Blog/BlogDetails';
import Home from '../pages/HomePage/Home';
import UserLogin from '../Authentication/LoginForm/LoginUp';
import UserProfile from './../pages/UserProfile/UserProfilepage';
import UserSignUp from './../Authentication/SignUp/Signup';
import AllUser from './../pages/UserProfile/AllUser/AllUser'
import AllBlogs from './../pages/UserProfile/AllBlogs/AlBlogs'
import SelectedBlog from './../pages/UserProfile/SelectedBlog/SelectedBlog'
import AdminAddBlog from './../pages/AddBlog/Admin/AddBlog'
import UserAddBlog from './../pages/AddBlog/User/AddBlog'
import TempBlog from './../pages/UserProfile/TempBlog/tempBlog'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                index:'home',
                element: <Home />,
            },
            {
                path:'blog',
                element: <BlogPage />,
            },
            {
                path: 'blog/:id',
                element: <BlogDetails />,
            },
           
            {
                path: 'login',
                element: <UserLogin />,
            },
            {
                path: 'signup',
                element: <UserSignUp />,
            },
            {
                path: 'profile',
                element: <UserProfile />,
                children:[
                    {
                        index:true,
                        element:<SelectedBlog/>
                    },
                    {
                        path:'userdetails',
                        element:< AllUser/>,
                    },
                    {
                        path:'allblog',
                        element:<AllBlogs/>
                    },
                    {
                        path:'yourblog',
                        element:<SelectedBlog/>
                    },
                    {
                        path:'adminaddBlog',
                        element:<AdminAddBlog/>
                    },
                    {
                        path:'useraddBlog',
                        element:<UserAddBlog/>
                    },
                    {
                        path:'tempBlog',
                        element:<TempBlog/>
                    }
                ]
            }
        ]
    },
    
]);

export default router;