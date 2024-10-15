import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styles from './Signup.module.scss';
import summeryApi from '../../common';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async(data) => {
    console.log(data);
    //Backend add
    try{
        const response=await fetch(summeryApi.SignUp.url, {
            method: summeryApi.SignUp.method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include',
        });
        const result = await response.json();
        console.log(result);
        if(!response.ok){
            throw new Error(result);
        }
        toast.success('Sign Up Successful');
        navigate('/login');
    }catch(error){
        console.error(error);
        toast.error(error.message);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.signupContainer}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.signupForm}>
        <div className={styles.formGroup}>
          <TextField
            label="Username"
            {...register('username', { required: 'Username is required' })}
            error={!!errors.username}
            helperText={errors.username?.message}
            fullWidth
            margin="normal"
          />
        </div>

        <div className={styles.formGroup}>
          <TextField
            label="Email"
            type="email"
            {...register('email', { required: 'Email is required' })}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
            margin="normal"
          />
        </div>

        <div className={styles.formGroup}>
          <TextField
            label="Name"
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
            fullWidth
            margin="normal"
          />
        </div>

        <div className={styles.formGroup}>
          <TextField
            label="Phone"
            {...register('phone', { required: 'Phone number is required' })}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            fullWidth
            margin="normal"
          />
        </div>

        <div className={styles.formGroup}>
          <TextField
            label="Date of Birth"
            type="date"
            {...register('dob', { required: 'Date of birth is required' })}
            error={!!errors.dob}
            helperText={errors.dob?.message}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div className={styles.formGroup}>
          <TextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            {...register('password', { required: 'Password is required' })}
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={(event) => event.preventDefault()}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <button type="submit" className={styles.submitButton}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
