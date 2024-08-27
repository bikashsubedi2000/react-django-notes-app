import { useEffect, useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayouts from './layouts/MainLayouts'
import AddNotePage from './pages/AddNotePage'
import NoteDetailPage from './pages/NoteDetailPage'
import EditNotePage from './pages/EditNotePage'

const [notes,setNotes]= useState([])

useEffect(()=>{
  axios.get("http://localhost:5173")


})


const App = () => {
  const router =createBrowserRouter(createRoutesFromElements(

      <Route path="/" element={<MainLayouts/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/add-notes" element={<AddNotePage/>}/>
        <Route path="/note-detail" element={<NoteDetailPage/>}/>
        <Route path="/edit-note" element={<EditNotePage/>}/>



    </Route>
  ))
  return <RouterProvider router={router}/>
   
  
}

export default App