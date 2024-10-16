import React, { useState, useEffect } from 'react';
import styles from './AllUser.module.scss';
import summeryApi from '../../../common';
import { toast } from 'react-toastify';

const AllBlogs = () => {
    const [users, setUsers] = useState([]);

    const getProfile = async () => {
        try {
            const response = await fetch(summeryApi.AllUser.url, {
                method: summeryApi.AllUser.method,
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            const result = await response.json();
            if(result.error){
                toast.error(result.error);
            }
            console.log('Faulty user check ',result);
            setUsers(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div>
            <div className={styles.container}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Date of Birth</th>
                            <th>Role</th>
                            <th>Created At</th>
                            <th>Updated At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.dob}</td>
                                <td>{user.role}</td>
                                <td>{new Date(user.createdAt).toLocaleString()}</td>
                                <td>{new Date(user.updatedAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBlogs;
