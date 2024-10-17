// import React, { useEffect, useState } from 'react';
// import summeryApi from '../../../common';
// import styles from './SelectedBlog.module.scss';
// import CardModel from '../../../component/CardModel/CardModel';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { toast } from 'react-toastify';
// import EditCard from '../../../component/EditCard/EditCard';
// import ClearIcon from '@mui/icons-material/Clear';

// const SelectedBlog = () => {
//     const [blog, setBlog] = useState([]); // Initialize as an empty array
//     const [loading, setLoading] = useState(true); // Loading state
//     const [error, setError] = useState(null); // Error state

//     const fetchBlog = async () => {
//         try {
//             const response = await fetch(summeryApi.SelectedBlog.url, {
//                 method: summeryApi.SelectedBlog.method,
//                 credentials: 'include',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             console.log('Fetched Selected Blog:', data);

//             if (data && data.length > 0) {
//                 setBlog(data);
//             } else {
//                 setBlog([]); // Empty array if no blog data
//             }
//         } catch (error) {
//             console.error('Failed to fetch blog:', error);
//             setError('Failed to load the blog.');
//         } finally {
//             setLoading(false); // Set loading to false regardless of success/failure
//         }
//     };

//     const handleEdit = (id) => {
//         // Handle edit functionality
//         console.log('edit');
//     };

//     const handleDelete = async (id) => {
//         const response = await fetch(summeryApi.DeleteYourBlog.url, {
//             method: summeryApi.DeleteYourBlog.method,
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             credentials: 'include',
//             body: JSON.stringify({ id }),
//         });
//         const data = await response.json();
//         console.log(data);
//         if (data.success) {
//             toast.success('Blog deleted successfully');
//             fetchBlog(); 
//         }
//         else{
//             toast.error('Failed to delete blog');
//         }
//     };

//     useEffect(() => {
//         fetchBlog();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>; // Show loading state
//     }

//     if (error) {
//         return <div>{error}</div>; 
//     }

//     return (
//         <div className={styles.allBlogsContainer}>
//             {blog.length > 0 ? (
//                 blog.map((item) => (
//                     <div key={item._id} className={styles.blogContainer}>
//                         <CardModel key={item._id} blog={item} flag={true}/>
//                         <div className={styles.editDelete}>
//                             <EditIcon onClick={() => handleEdit(item._id)} className={styles.icon} />
//                             <DeleteForeverIcon onClick={() => handleDelete(item._id)} className={styles.icon} />
//                         </div>
//                     </div>
//                 ))
//             ) : (
//                 <div>No blog found.</div>
//             )}
//         </div>
//     );
// };

// export default SelectedBlog;


import React, { useEffect, useState } from 'react';
import summeryApi from '../../../common';
import styles from './SelectedBlog.module.scss';
import CardModel from '../../../component/CardModel/CardModel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { toast } from 'react-toastify';
import EditCard from '../../../component/EditCard/EditCard';
import ClearIcon from '@mui/icons-material/Clear';


const SelectedBlog = () => {
    const [blog, setBlog] = useState([]); // Blog data state
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const [isEditOpen, setIsEditOpen] = useState(false); // Modal state
    const [selectedBlog, setSelectedBlog] = useState(null); // The blog being edited

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

    const handleEdit = (blog) => {
        setSelectedBlog(blog); // Set the selected blog to edit
        setIsEditOpen(true); // Open the modal
    };

    const handleCloseEdit = () => {
        setIsEditOpen(false); // Close the modal
        setSelectedBlog(null); // Clear the selected blog
    };

    const handleDelete = async (id) => {
        const response = await fetch(summeryApi.DeleteYourBlog.url, {
            method: summeryApi.DeleteYourBlog.method,
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ id }),
        });
        const data = await response.json();
        console.log(data);
        
        if (data.success) {
            toast.success('Blog deleted successfully');
            fetchBlog(); 
        }
        else{
            toast.error('Failed to delete blog');
        }
    };

    useEffect(() => {
        fetchBlog();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }

    if (error) {
        return <div>{error}</div>; 
    }

    return (
        <div className={styles.allBlogsContainer}>
            {blog.length > 0 ? (
                blog.map((item) => (
                    <div key={item._id} className={styles.blogContainer}>
                        <CardModel key={item._id} blog={item} flag={true}/>
                        <div className={styles.editDelete}>
                            <EditIcon onClick={() => handleEdit(item)} className={styles.icon} />
                            <DeleteForeverIcon onClick={() => handleDelete(item._id)} className={styles.icon} />
                        </div>
                    </div>
                ))
            ) : (
                <div>No blog found.</div>
            )}

            {/* Edit modal */}
            {isEditOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <ClearIcon 
                            onClick={handleCloseEdit} 
                            className={styles.closeIcon}
                            style={{ cursor: 'pointer' }} 
                        />
                        <EditCard blog={selectedBlog} isadmin={false} func={fetchBlog} func2={handleCloseEdit}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectedBlog;
