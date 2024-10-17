// import React from 'react';
// import styles from './Admin.module.scss';
// import { Outlet, Link } from 'react-router-dom';

// const Admin = ({ profile }) => {
//     return (
//         <div className={styles.container}>
//             <div className={styles.leftBar}>
//                 <p>Welcome <span className='font-bold'>{profile.name}</span> in infoma</p>
//                 {/* <p>Email: <span className='font-bold'>{profile.email}</span></p> */}
//                 <Link to='/profile/edit' className={styles.EditProfile}>Edit Profile</Link>
//                 <Link to='/profile/userdetails' className={styles.UserDetails}>All User</Link>
//                 <Link to='/profile/yourblog' className={styles.BlogDetails}>Your Blogs</Link>
//                 <Link to={`/profile/allblog`} className={styles.BlogDetails}>All Blogs</Link>
//                 <Link to={`/profile/adminaddBlog`} className={styles.BlogDetails}>Add Blog</Link>
//                 <Link to={`/profile/tempBlog`} className={styles.BlogDetails}>Blog Message</Link>
//             </div>
//             <div className={styles.rightBar}>
//                 <Outlet />
//             </div>
//         </div>
//     );
// }

// export default Admin;



import React from 'react';
import styles from './Admin.module.scss';
import { Outlet, NavLink } from 'react-router-dom';

const Admin = ({ profile }) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftBar}>
                <p>Welcome <span className='font-bold'>{profile.name}</span> in infoma</p>
                <NavLink 
                    to='/profile/edit' 
                    className={({ isActive }) => isActive ? styles.activeLink : styles.EditProfile}
                >
                    Edit Profile
                </NavLink>
                <NavLink 
                    to='/profile/userdetails' 
                    className={({ isActive }) => isActive ? styles.activeLink : styles.UserDetails}
                >
                    All User
                </NavLink>
                <NavLink 
                    to='/profile/yourblog' 
                    className={({ isActive }) => isActive ? styles.activeLink : styles.BlogDetails}
                >
                    Your Blogs
                </NavLink>
                <NavLink 
                    to='/profile/allblog' 
                    className={({ isActive }) => isActive ? styles.activeLink : styles.BlogDetails}
                >
                    All Blogs
                </NavLink>
                <NavLink 
                    to='/profile/adminaddBlog' 
                    className={({ isActive }) => isActive ? styles.activeLink : styles.BlogDetails}
                >
                    Add Blog
                </NavLink>
                <NavLink 
                    to='/profile/tempBlog' 
                    className={({ isActive }) => isActive ? styles.activeLink : styles.BlogDetails}
                >
                    Blog Message
                </NavLink>
            </div>
            <div className={styles.rightBar}>
                <Outlet />
            </div>
        </div>
    );
}

export default Admin;
