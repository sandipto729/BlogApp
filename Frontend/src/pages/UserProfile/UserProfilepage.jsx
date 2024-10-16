import React, { useState, useEffect } from 'react';
import summeryApi from '../../common';
import styles from './UserProfile.module.scss';
import { Link } from 'react-router-dom';
import Admin from '../UserProfile/Admin/Admin';
import User from '../UserProfile/User/User';
import { useSelector } from 'react-redux';



const Profilepage = () => {
    const user = useSelector((state) => state.user.user);
    console.log('user', user);
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
                {/* <p>Welcome <span className='font-bold'>{profile.name}</span> in infoma</p>
                <p>Email: <span className='font-bold'>{profile.email}</span></p> */}
                
                {(user && user.role==="admin") ? <Admin profile={profile} /> : <User profile={profile} />}
                
            </div>
        </div>
    );
}

export default Profilepage;