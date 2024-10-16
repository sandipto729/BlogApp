import React from 'react';
import styles from './Admin.module.scss';
import { Outlet, Link } from 'react-router-dom';

const Admin = ({ profile }) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftBar}>
                <p>Welcome <span className='font-bold'>{profile.name}</span> in infoma</p>
                {/* <p>Email: <span className='font-bold'>{profile.email}</span></p> */}
                <Link to='/profile/edit' className={styles.EditProfile}>Edit Profile</Link>
                <Link to='/profile/userdetails' className={styles.UserDetails}>All User</Link>
                <Link to='/profile/yourblog' className={styles.BlogDetails}>Your Blogs</Link>
                <Link to={`/profile/allblog`} className={styles.BlogDetails}>All Blogs</Link>
                <Link to={`/profile/adminaddBlog`} className={styles.BlogDetails}>Add Blog</Link>
                <Link to={`/profile/tempBlog`} className={styles.BlogDetails}>Blog Message</Link>
            </div>
            <div className={styles.rightBar}>
                <Outlet />
            </div>
        </div>
    );
}

export default Admin;
