import React from 'react';
import styles from './CardModel.module.scss'; 

const CardModel = ({ blog }) => {
  return (
    <div className={styles.card}>
      <img src={blog.image} alt={blog.title} className={styles.image} />
      <div className={styles.cardContent}>
        <h2>{blog.title}</h2>
        <p>Author: {blog.author}</p>
        <p>Date: {new Date(blog.date).toLocaleDateString()}</p>
        <p>Topic: {blog.description}</p>
        {/* No content */}
      </div>
    </div>
  );
};

export default CardModel;
