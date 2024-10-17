// import React, { useState, useEffect, useMemo, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { useInView } from 'framer-motion';
// import './cardFetchStyle.css';
// import summeryApi from '../../common';

// const CardFetch = () => {
//   const [card, setCard] = useState([]);
//   const [currPage, setCurrPage] = useState(1);
//   const [maxPage, setMaxPage] = useState(1);
//   const blogPerPage = 4;

//   const blogPageRef = useRef(null);
//   const { ref: blogPage, inView: animationBlog } = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   const fetchData = async () => {
//     try {
//       const response = await fetch(summeryApi.CardFetch.url, {
//         method: summeryApi.CardFetch.method,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//       });
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       console.log(data); 
//       setCard(data);
//         setMaxPage(Math.ceil(data.length / blogPerPage));
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const paginatedCard = useMemo(() => {
//     if (!Array.isArray(card)) return []; 
//     const startIndex = (currPage - 1) * blogPerPage;
//     const endIndex = startIndex + blogPerPage;
//     return card.slice(startIndex, endIndex);
//   }, [card, currPage]);

//   const handleNextPage = () => {
//     if (currPage < maxPage) {
//       setCurrPage(currPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currPage > 1) {
//       setCurrPage(currPage - 1);
//     }
//   };

//   return (
//     <div className='blogPage' ref={blogPage}>
//       <div className="blogTitle">
//         <h2>Our Blogs</h2>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum unde esse voluptatum odit. Sequi a vel voluptatibus eius, sunt saepe.</p>
//       </div>
//       <div className="blogCards">
//         {paginatedCard.map((item) => (
//           <Link to={`/blog/${encodeURIComponent(item._id)}`} className="blogCard" key={item.blog_title}>
//             <div className="blogImg">
//               <img src={item.image} alt="blog Photo" className='blogImage' />
//             </div>
//             <div className="blogText">
//               <h3>{item.title}</h3>
//               <p>{item.description}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//       <div className="pagination">
//         <button onClick={handlePrevPage} disabled={currPage === 1}>
//           Previous
//         </button>
//         <span>{currPage} of {maxPage}</span>
//         <button onClick={handleNextPage} disabled={currPage === maxPage}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CardFetch;

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import styles from './cardFetch.module.scss'; // Import the SCSS module
import summeryApi from '../../common';

const CardFetch = () => {
  const [card, setCard] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const blogPerPage = 16;

  const blogPageRef = useRef(null);
  const { ref: blogPage, inView: animationBlog } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fetchData = async () => {
    try {
      const response = await fetch(summeryApi.CardFetch.url, {
        method: summeryApi.CardFetch.method,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data); 
      setCard(data);
      setMaxPage(Math.ceil(data.length / blogPerPage));
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const paginatedCard = useMemo(() => {
    if (!Array.isArray(card)) return []; 
    const startIndex = (currPage - 1) * blogPerPage;
    const endIndex = startIndex + blogPerPage;
    return card.slice(startIndex, endIndex);
  }, [card, currPage]);

  const handleNextPage = () => {
    if (currPage < maxPage) {
      setCurrPage(currPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
    }
  };

  return (
    <div className={styles.blogPage} ref={blogPage}>
      <div className={styles.blogTitle}>
        <h2>Our Blogs</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum unde esse voluptatum odit. Sequi a vel voluptatibus eius, sunt saepe.</p>
      </div>
      <div className={styles.blogCards}>
        {paginatedCard.map((item) => (
          <Link to={`/blog/${encodeURIComponent(item._id)}`} className={styles.blogCard} key={item.blog_title}>
            <div className={styles.blogImg}>
              <img src={item.image} alt="blog Photo" className={styles.blogImage} />
            </div>
            <div className={styles.blogText}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={currPage === 1}>
          Previous
        </button>
        <span>{currPage} of {maxPage}</span>
        <button onClick={handleNextPage} disabled={currPage === maxPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CardFetch;
