import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SummaryApi from '../../common';
import styles from './login.module.scss';
import { toast } from 'react-toastify';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../../store/userSlice';
import summeryApi from '../../common';

const DeveloperLogin = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const dispatch = useDispatch();
    const fetchUser = async () => {
        try {
            const response = await fetch(summeryApi.ProfilePage.url, {
                method: summeryApi.ProfilePage.method,
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
            const result = await response.json();
            console.log('Faulty result', result);
            dispatch(setUserDetails(result));
            console.log(result);
        } catch (error) {
            console.error(error);
            toast.error(error.message)
        }
    }

    const onSubmit = async (data) => {
        try {
            const response = await fetch(SummaryApi.Login.url, {
                method: SummaryApi.Login.method,
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

            fetchUser();
            toast.success(responseData.message);
            navigate('/profile');

        } catch (error) {
            console.error("Error logging in:", error);
            toast.error("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <div className={styles.DevLoginContainer}>
            <h2>Developer Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.DevForm}>
                <input
                    {...register("email", { required: true })}
                    placeholder='Email'
                    className={styles.inputField}
                />
                {errors.email && <span className={styles.errorText}>*This field is required</span>}

                <div className={styles.password}>
                    <input
                        type={showPassword ? "text" : "password"}
                        {...register("password", { required: true })}
                        placeholder='Password'
                        className={styles.inputField}
                    />
                    {errors.password && <span className={styles.errorText}>*This field is required</span>}
                    {showPassword ? (
                        <VisibilityOffIcon
                            onClick={() => setShowPassword(!showPassword)}
                            className={styles.passwordIcon}
                        />
                    ) : (
                        <VisibilityIcon
                            onClick={() => setShowPassword(!showPassword)}
                            className={styles.passwordIcon}
                        />
                    )}
                </div>

                <input type="submit" className={styles.submitButton} />
            </form>
            <p className={styles.signUp}>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
    );
};

export default DeveloperLogin;
