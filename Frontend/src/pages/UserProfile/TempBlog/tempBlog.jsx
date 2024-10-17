import React, { useState, useEffect } from 'react';
import summeryApi from '../../../common';
import styles from './tempBlog.module.scss';
import CardModel from './../../../component/CardModel/CardModel';
import { toast } from 'react-toastify';

const TempBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(summeryApi.TempBlogFetch.url, {
        method: summeryApi.TempBlogFetch.method,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setBlogs(data || []);
      console.log(data);
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      const response = await fetch(summeryApi.TempBlogDelete.url, {
        method: summeryApi.TempBlogDelete.method,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      fetchBlogs();
      toast.success('Blog deleted successfully');
      console.log(data);
    } catch (error) {
      console.error('Failed to delete blog:', error);
    }
  };

  const confirmBlog = async (id) => {
    try {
      const response = await fetch(summeryApi.TempBlogToMain.url, {
        method: summeryApi.TempBlogToMain.method,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      fetchBlogs();
      console.log(data);
      toast.success('Blog Successfully added successfully');
    } catch (error) {
      console.error('Failed to confirm blog:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className={styles.allBlogsContainer}>
      {blogs.map((blog) => (
        <div key={blog._id} className={styles.blogCard}>
          <CardModel blog={blog} flag={false}/>
          <div className={styles.editDelete}>
            <p onClick={() => confirmBlog(blog._id)}>Confirm</p>
            <p onClick={() => deleteBlog(blog._id)}>Delete</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TempBlogs;
