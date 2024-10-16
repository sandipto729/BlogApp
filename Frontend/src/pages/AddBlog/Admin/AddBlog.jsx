// import React from 'react';
// import { useForm } from 'react-hook-form';

// import styles from './AddBlog.module.scss';
// import summeryApi from '../../../common'; 
// import {toast} from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const AddBlogForm = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const onSubmit = async (data) => {
//         const response=await fetch(summeryApi.AdminBlogAdd.url, {
//             method: summeryApi.AdminBlogAdd.method,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//             credentials: 'include',
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const result = await response.json();
//         console.log(result);
//         toast.success('Blog added successfully');
//         navigate('/profile');
//     };

//     return (
//         <form onSubmit={handleSubmit(onSubmit)} className={styles.blogForm}>
//             <div>
//                 <label htmlFor="title">Title</label>
//                 <input
//                     id="title"
//                     {...register('title', { required: 'Title is required' })}
//                 />
//                 {errors.title && <p className={styles.error}>{errors.title.message}</p>}
//             </div>
//             <div>
//                 <label htmlFor="description">Description</label>
//                 <textarea
//                     id="description"
//                     {...register('description', { required: 'Description is required' })}
//                 />
//                 {errors.description && <p className={styles.error}>{errors.description.message}</p>}
//             </div>
//             <div>
//                 <label htmlFor="image">Image URL</label>
//                 <input
//                     id="image"
//                     {...register('image', { required: 'Image URL is required' })}
//                 />
//                 {errors.image && <p className={styles.error}>{errors.image.message}</p>}
//             </div>
//             <div>
//                 <label htmlFor="content">Content</label>
//                 <textarea
//                     id="content"
//                     {...register('content', { required: 'Content is required' })}
//                 />
//                 {errors.content && <p className={styles.error}>{errors.content.message}</p>}
//             </div>
//             <div>
//                 <label htmlFor="category">Category</label>
//                 <input
//                     id="category"
//                     {...register('category', { required: 'Category is required' })}
//                 />
//                 {errors.category && <p className={styles.error}>{errors.category.message}</p>}
//             </div>
//             <button type="submit" className={styles.submitButton}>Add Blog</button>
//         </form>
//     );
// };

// export default AddBlogForm;

import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './AddBlog.module.scss';
import summeryApi from '../../../common'; 
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddBlogForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await fetch(summeryApi.AdminBlogAdd.url, {
                method: summeryApi.AdminBlogAdd.method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result);
            toast.success('Blog added successfully');
            navigate('/profile');
        } catch (error) {
            toast.error('Failed to add blog. Please try again.');
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.blogForm}>
            <div className={styles.form}>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    placeholder="Enter blog title"
                    {...register('title', { required: 'Title is required' })}
                />
                {errors.title && <p className={styles.error}>{errors.title.message}</p>}
            </div>
            <div className={styles.form}>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    placeholder="Enter blog description"
                    {...register('description', { required: 'Description is required' })}
                />
                {errors.description && <p className={styles.error}>{errors.description.message}</p>}
            </div>
            <div className={styles.form}>
                <label htmlFor="image">Image URL</label>
                <input
                    id="image"
                    placeholder="Enter image URL"
                    {...register('image', { required: 'Image URL is required' })}
                />
                {errors.image && <p className={styles.error}>{errors.image.message}</p>}
            </div>
            <div className={styles.form}>
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    placeholder="Enter blog content"
                    {...register('content', { required: 'Content is required' })}
                />
                {errors.content && <p className={styles.error}>{errors.content.message}</p>}
            </div>
            <div className={styles.form}>
                <label htmlFor="category">Category</label>
                <input
                    id="category"
                    placeholder="Enter blog category"
                    {...register('category', { required: 'Category is required' })}
                />
                {errors.category && <p className={styles.error}>{errors.category.message}</p>}
            </div>
            <button type="submit" className={styles.submitButton}>Add Blog</button>
        </form>
    );
};

export default AddBlogForm;
