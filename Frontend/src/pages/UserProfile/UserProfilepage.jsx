import React, { useState, useEffect } from 'react';
import summeryApi from '../../common';
import styles from './UserProfile.module.scss';
import { Link } from 'react-router-dom';



const Profilepage = () => {
    const [profile, setProfile] = useState([]);

    const getProfile = async () => {
        try {
            const response = await fetch(summeryApi.ProfilePage.url, {
                method: summeryApi.ProfilePage.method,
                credentials: 'include', 
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            const result = await response.json();
            console.log(result); 
            setProfile(result);
        } catch (error) {
            console.error(error);
        }
    }
    

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.leftBar}>
                <p>Welcome <span className='font-bold'>{profile.name}</span> in infoma</p>
                <p>Email: <span className='font-bold'>{profile.email}</span></p>
            </div>
        </div>
    );
}

export default Profilepage;