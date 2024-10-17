// import React, { useState, useEffect } from 'react';
// import summeryApi from '../../../common';
// import styles from './AllBlogs.module.scss';
// import CardModel from './../../../component/CardModel/CardModel';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { toast } from 'react-toastify';
// import EditCard from '../../../component/EditCard/EditCard';
// import ClearIcon from '@mui/icons-material/Clear';

// const AlBlogs = () => {
//   const [blog, setBlog] = useState([]);

//   const fetchBlogs = async () => {
//     try {
//       const response = await fetch(summeryApi.AllBlogs.url, {
//         method: summeryApi.AllBlogs.method,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       if (data) {
//         setBlog(data);
//       }
//       else {
//         setBlog([]);
//       }
//       console.log(data);
//     } catch (error) {
//       console.error('Failed to fetch blogs:', error);
//     }
//   };
//   const handleEdit = (id) => {
//     // Handle edit functionality
//     console.log('edit');

//   };


//   const handleDelete = async (id) => {
//     const response = await fetch(summeryApi.DeleteAnyBlog.url, {
//       method: summeryApi.DeleteAnyBlog.method,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       credentials: 'include',
//       body: JSON.stringify({ id }),
//     });
//     const data = await response.json();
//     console.log(data);
//     if (data.success) {
//       toast.success('Blog deleted successfully');
//       fetchBlogs();
//     }
//     else {
//       toast.error('Failed to delete blog');
//     }
//   };


//   const handleCross = () => {

//   }


//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   return (
//     <div className={styles.allBlogsContainer}>
//       {blog.length > 0 ? (
//         blog.map((item) => (
//           <div key={item._id} className={styles.blogContainer}>
//             <CardModel key={item._id} blog={item} flag={true} />
//             <div className={styles.editDelete}>
//               <EditIcon onClick={() => handleEdit(item._id)} className={styles.icon} />
//               <DeleteForeverIcon onClick={() => handleDelete(item._id)} className={styles.icon} />
//             </div>
//             <div className={styles.crossBar}>
//               <ClearIcon onClick={() => handleCross()} style={{ cursor: 'pointer', textAlign: 'right' }} />
//               <EditCard blog={item} />
//             </div>
//           </div>
//         ))
//       ) : (
//         <div>No blog found.</div>
//       )}
//     </div>
//   );
// };

// export default AlBlogs;

import React, { useState, useEffect } from 'react';
import summeryApi from '../../../common';
import styles from './AllBlogs.module.scss';
import CardModel from './../../../component/CardModel/CardModel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { toast } from 'react-toastify';
import EditCard from '../../../component/EditCard/EditCard';
import ClearIcon from '@mui/icons-material/Clear';

const AlBlogs = () => {
  const [blog, setBlog] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false); // Modal state
  const [selectedBlog, setSelectedBlog] = useState(null); // Blog being edited

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
      if (data) {
        setBlog(data);
      } else {
        setBlog([]);
      }
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    }
  };

  const handleEdit = (blog) => {
    setSelectedBlog(blog); // Set the selected blog
    setIsEditOpen(true); // Open the edit modal
  };

  const handleDelete = async (id) => {
    const response = await fetch(summeryApi.DeleteAnyBlog.url, {
      method: summeryApi.DeleteAnyBlog.method,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    if (data.success) {
      toast.success('Blog deleted successfully');
      fetchBlogs();
    } else {
      toast.error('Failed to delete blog');
    }
  };

  const handleCloseEdit = () => {
    setIsEditOpen(false); // Close the modal
    setSelectedBlog(null); // Clear the selected blog
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className={styles.allBlogsWrapper}>
      <div className={`${styles.allBlogsContainer} ${isEditOpen ? styles.blurred : ''}`}>
        {blog.length > 0 ? (
          blog.map((item) => (
            <div key={item._id} className={styles.blogContainer}>
              <CardModel key={item._id} blog={item} flag={true} />
              <div className={styles.editDelete}>
                <EditIcon onClick={() => handleEdit(item)} className={styles.icon} />
                <DeleteForeverIcon onClick={() => handleDelete(item._id)} className={styles.icon} />
              </div>
            </div>
          ))
        ) : (
          <div>No blog found.</div>
        )}
      </div>

      {isEditOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <ClearIcon 
              onClick={handleCloseEdit} 
              className={styles.closeIcon} // Added styling for the close button
              style={{ cursor: 'pointer' }} 
            />
            <EditCard blog={selectedBlog} isadmin={true}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlBlogs;
