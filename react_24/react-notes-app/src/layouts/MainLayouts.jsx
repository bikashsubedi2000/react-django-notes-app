import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayouts = () => {
  return (
    <>
    <NavBar/>
    <ToastContainer />
    <Outlet/>
    </>
  )
}

export default MainLayouts