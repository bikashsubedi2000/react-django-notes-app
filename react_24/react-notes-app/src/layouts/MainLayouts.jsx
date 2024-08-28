import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayouts = ({searchText,handleSearchText}) => {
  return (
    <>
    <NavBar searchText={searchText} handleSearchText={handleSearchText}/>
    <ToastContainer />
    <Outlet/>
    </>
  )
}

export default MainLayouts