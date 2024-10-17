import React from 'react';
import styles from './CardModel.module.scss'; 
import { Link } from 'react-router-dom';

const CardModel = ({ blog, flag }) => {
  return (
    <Link to={flag ? `/blog/${blog._id}` : `/tempblog/${blog._id}`} className={styles.card}>
      <img src={blog.image} alt={blog.title} className={styles.image} />
      <div className={styles.cardContent}>
        <h2>{blog.title}</h2>
        <p>Author: {blog.author}</p>
        <p>Date: {new Date(blog.date).toLocaleDateString()}</p>
        <p>Topic: {blog.description}</p>
      </div>
    </Link>
  );
};

export default CardModel;
