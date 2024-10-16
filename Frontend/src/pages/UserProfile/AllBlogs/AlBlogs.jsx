import React, { useState, useEffect } from 'react';
import summeryApi from '../../../common';
import styles from './AllBlogs.module.scss';
import CardModel from './../../../component/CardModel/CardModel';

const AlBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(summeryApi.AllBlogs.url, {
        method: summeryApi.AllBlogs.method,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if(data){
        setBlogs(data);
      }
      else{
        setBlogs([]);
      }
      console.log(data);
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className={styles.allBlogsContainer}>
      {blogs.map((blog) => (
        <CardModel key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default AlBlogs;
