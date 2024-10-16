import React from 'react';
import styles from './User.module.scss';
import { Outlet, Link } from 'react-router-dom';

const User = ({ profile }) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBar}>
        <p>Welcome <span className='font-bold'>{profile.name}</span> in infoma</p>
        {/* <p>Email: <span className='font-bold'>{profile.email}</span></p> */}
        <Link to={`/profile/edit`} className={styles.EditProfile}>Edit Profile</Link>
        <Link to='/profile/yourblog' className={styles.BlogDetails}>Your Blogs</Link>
        <Link to={`/profile/useraddBlog`} className={styles.BlogDetails}>Add Blog(User)</Link>
      </div>
      <div className={styles.rightBar}>
        <Outlet />
      </div>
    </div>
  );
}

export default User;
