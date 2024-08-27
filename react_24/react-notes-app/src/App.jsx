import { useEffect, useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayouts from './layouts/MainLayouts'
import AddNotePage from './pages/AddNotePage'
import NoteDetailPage from './pages/NoteDetailPage'
import EditNotePage from './pages/EditNotePage'
import axios from "axios"





const App = () => {
  const [notes,setNotes]= useState([])
  const [isLoading,setIsLoading]=useState(false)

useEffect(()=>{
  setIsLoading(true)
  axios.get("http://127.0.0.1:8008/notes/").then(res=>{
    console.log(res.data)
    setNotes(res.data)
    setIsLoading(false)
  })
  .catch(err=>{
    console.log(err.message)
  })
    
  ,[]}
)

  const router =createBrowserRouter(createRoutesFromElements(

      <Route path="/" element={<MainLayouts/>}>
        <Route index element={<HomePage notes={notes} loading={isLoading}/>}/>
        <Route path="/add-notes" element={<AddNotePage/>}/>
        <Route path="/notes/:slug" element={<NoteDetailPage/>}/>
        <Route path="/edit-note" element={<EditNotePage/>}/>



    </Route>
  ))
  return <RouterProvider router={router}/>
   
  
}

export default App