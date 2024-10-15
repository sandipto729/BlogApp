import { createBrowserRouter } from 'react-router-dom';

import App from './../App';
import BlogPage from './../pages/cardFetch/cardFetch';
import BlogDetails from '../pages/Blog/BlogDetails';
import Home from '../pages/HomePage/Home';
import UserLogin from '../Authentication/LoginForm/LoginUp';
import UserProfile from './../pages/UserProfile/UserProfilepage';
import UserSignUp from './../Authentication/SignUp/Signup';

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
            }
        ]
    },
    
]);

export default router;