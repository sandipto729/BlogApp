// import React, { useState } from 'react';
// import './Home.css';

// const Slider = () => {
//     const images = [
//         'https://infoma.me/images/usgs-hoS3dzgpHzw-unsplash.jpg',
//         'https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I',
//         'https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM',
//         'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handlePrevClick = () => {
//         setCurrentIndex((prevIndex) => 
//             prevIndex === 0 ? images.length - 1 : prevIndex - 1
//         );
//     };

//     const handleNextClick = () => {
//         setCurrentIndex((prevIndex) => 
//             prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     return (
//         <div className="slider-container">
//             <div className='full'>
//             <div className='element'>
//             <h1 className='first'>Very Proud to introduce</h1>
//             <h1 className='second'>Seamless Learning for Brighter Futures</h1>
//             <p>Our innovative platform offers an effortless and seamless
//                 approach to learning, empowering students of all ages to achieve
//                  brighter futures. Join us on a transformative journey to simplify
//                   education and unlock your full potential.</p>
//             </div>
//             <div className='slideb'>
//             <button className='bb'>Start Now</button>
//             <button className='bb1'>Take Now</button>
//             </div>
//             </div>
//             <div className='box'>
//             <div className="image-box">
//                 <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
//             </div>
//             <div className='buttons'>
//             <button className="slider-button" onClick={handlePrevClick}>Prev</button>
//             <button className="slider-button" onClick={handleNextClick}>Next</button>
//             </div>
//             </div>
//         </div>
//     );
// };

// export default Slider;


import React, { useState } from 'react';
import styles from './Home.module.scss';

const Home = () => {
    const images = [
        'https://infoma.me/images/usgs-hoS3dzgpHzw-unsplash.jpg',
        'https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I',
        'https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM',
        'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.full}>
                <div className={styles.element}>
                    <h1 className={styles.first}>Very Proud to introduce</h1>
                    <h1 className={styles.second}>Seamless Learning for Brighter Futures</h1>
                    <p>Our innovative platform offers an effortless and seamless
                        approach to learning, empowering students of all ages to achieve
                        brighter futures. Join us on a transformative journey to simplify
                        education and unlock your full potential.</p>
                </div>
                <div className={styles.slideb}>
                    <button className={styles.bb}>Start Now</button>
                    <button className={styles.bb1}>Take Now</button>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.imageBox}>
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
                </div>
                <div className={styles.buttons}>
                    <button className={styles.sliderButton} onClick={handlePrevClick}>Prev</button>
                    <button className={styles.sliderButton} onClick={handleNextClick}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
