import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import summeryApi from './common';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';



function App() {
  const dispatch = useDispatch();
  const fetchUser=async()=>{
    try{
      const response=await fetch(summeryApi.ProfilePage.url, {
        method: summeryApi.ProfilePage.method,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const result = await response.json();
      console.log('Faulty result',result);
      dispatch(setUserDetails(result));
      console.log(result);
    }catch(error){
      console.error(error);
      toast.error(error.message)
    }
  }

  React.useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
     <ToastContainer />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
