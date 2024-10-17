import React from 'react'
import { useForm } from 'react-hook-form';
import styles from './EditCard.module.scss';
import { useNavigate } from 'react-router-dom';
import summeryApi from '../../common';
import { toast } from 'react-toastify';


const EditCard = ({ blog ,isadmin,func,func2}) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            title: blog?.title || '',
            description: blog?.description || '',
            image: blog?.image || '',
            content: blog?.content || '',
            category: blog?.category || '',
        }
    });
    
    const navigate = useNavigate();

    React.useEffect(() => {
        reset(blog);
    }, [blog, reset]);

    const onSubmit = async (data) => {
        console.log(data);
        // Handle the form submission logic here
        if (isadmin) {
            try{
                const response=await fetch(summeryApi.UpdateAnyBlog.url, {
                    method: summeryApi.UpdateAnyBlog.method,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                    credentials: 'include',
                });
                const responseData = await response.json();
                if (!response.ok) {
                    toast.error(responseData.message || "Login failed");
                    return;
                }
                toast.success('Blog updated successfully');
                navigate('/profile');
            }catch(error){
                toast.error(error.message);
            }
        }
        else{
            try{
                const response=await fetch(summeryApi.UpdateYourBlog.url, {
                    method: summeryApi.UpdateYourBlog.method,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                    credentials: 'include',
                });
                const responseData = await response.json();
                if (!response.ok) {
                    toast.error(responseData.message || "Login failed");
                    return;
                }
                toast.success('Blog updated successfully');
                func();
                func2();
                navigate('/profile');
            }catch(error){
                toast.error(error.message);
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.blogForm}>
                {/* <p><ClearIcon onClick={() => navigate(-1)} style={{cursor: 'pointer',textAlign: 'right'}}/></p> */}
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
                <button type="submit" className={styles.submitButton}>Save Changes</button>
            </form>
        </div>
    )
}

export default EditCard;
