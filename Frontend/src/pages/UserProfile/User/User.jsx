import React from 'react';
import styles from './User.module.scss';
import { Outlet, NavLink } from 'react-router-dom';

const User = ({ profile }) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBar}>
        <p>Welcome <span className='font-bold'>{profile.name}</span> in infoma</p>

        <NavLink
          to="/profile/edit"
          className={({ isActive }) => isActive ? `${styles.EditProfile} ${styles.activeLink}` : styles.EditProfile}
        >
          Edit Profile
        </NavLink>

        <NavLink
          to="/profile/yourblog"
          className={({ isActive }) => isActive ? `${styles.BlogDetails} ${styles.activeLink}` : styles.BlogDetails}
        >
          Your Blogs
        </NavLink>

        <NavLink
          to="/profile/useraddBlog"
          className={({ isActive }) => isActive ? `${styles.BlogDetails} ${styles.activeLink}` : styles.BlogDetails}
        >
          Add Blog (User)
        </NavLink>
      </div>

      <div className={styles.rightBar}>
        <Outlet />
      </div>
    </div>
  );
};

export default User;
