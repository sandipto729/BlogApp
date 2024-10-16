import React, { useEffect, useState } from 'react';
import summeryApi from '../../../common';
import styles from './SelectedBlog.module.scss';
import CardModel from '../../../component/CardModel/CardModel';

const SelectedBlog = () => {
    const [blog, setBlog] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    const fetchBlog = async () => {
        try {
            const response = await fetch(summeryApi.SelectedBlog.url, {
                method: summeryApi.SelectedBlog.method,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Fetched Selected Blog:', data);

            if (data && data.length > 0) {
                setBlog(data);
            } else {
                setBlog([]); // Empty array if no blog data
            }
        } catch (error) {
            console.error('Failed to fetch blog:', error);
            setError('Failed to load the blog.');
        } finally {
            setLoading(false); // Set loading to false regardless of success/failure
        }
    };

    useEffect(() => {
        fetchBlog();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }

    if (error) {
        return <div>{error}</div>; // Show error message
    }

    return (
        <div className={styles.allBlogsContainer}>
            {blog.length > 0 ? (
                blog.map((item) => (
                    <CardModel key={item._id} blog={item} />
                ))
            ) : (
                <div>No blog found.</div>
            )}
        </div>
    );
};

export default SelectedBlog;
