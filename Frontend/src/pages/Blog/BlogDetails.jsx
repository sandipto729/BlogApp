import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import summeryApi from '../../common';
import styles from './BlogDetails.module.scss';

const Blog1 = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(summeryApi.GetBlogID.url, {
          method: summeryApi.GetBlogID.method,
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: id }),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlog(data.data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!blog) return <div>Blog not found.</div>;

  return (
    <div className={styles.blogContainer}>
      {/* Blog Title */}
      <h1 className={styles.title}>{blog.title}</h1>

      {/* Blog Image */}
      <img src={blog.image} alt="Blog" className={styles.image} />

      {/* Blog Description */}
      <p className={styles.description}>{blog.description}</p>

      {/* Author Details */}
      <div className={styles.authorSection}>
        {blog.authorImage && (
          <img
            src={blog.authorImage}
            alt="Author"
            className={styles.authorImage}
          />
        )}
        <div className={styles.authorInfo}>
          <p className={styles.authorName}>Author: {blog.author}</p>
          <p className={styles.date}>Date: {new Date(blog.date).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Blog Categories */}
      {blog.category && (
        <div className={styles.categories}>
          <strong>Categories: </strong>
          {blog.category.join(', ')}
        </div>
      )}

      {/* Blog Content */}
      <div className={styles.content}>
        <h2>Content</h2>
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default Blog1;
