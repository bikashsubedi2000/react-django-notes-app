import { useEffect, useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayouts from './layouts/MainLayouts'
import AddNotePage from './pages/AddNotePage'
import NoteDetailPage from './pages/NoteDetailPage'
import EditNotePage from './pages/EditNotePage'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  const [notes,setNotes]= useState([])
  const [isLoading,setIsLoading]=useState(false)
  useEffect(() => {
    setIsLoading(true); // Set loading state to true before fetching data
  
    axios
      .get("http://127.0.0.1:8008/notes/")
      .then((res) => {
        console.log(res.data);
        setNotes(res.data); // Update state with fetched data
        setIsLoading(false); // Set loading state to false after data is fetched
      })
      .catch((err) => {
        console.error(err.message); // Log error
        setIsLoading(false); // Ensure loading state is set to false on error
      });
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts
  
const addNote = async (data) => {
  try {
    const res = await axios.post("http://127.0.0.1:8008/notes/", data); // Await the axios request
    const { data: newNote } = res; // Destructure the response to get the new note

    setNotes((prevNotes) => [...prevNotes, newNote]); // Use a functional update to ensure you get the latest state

    toast.success("A new note added successfully");
    console.log(newNote); // Log the new note data
  } catch (err) {
    console.error("Error adding note:", err.message); // Provide more context in the error log
    toast.error("Failed to add a new note. Please try again."); // Add a user-friendly error toast
  }
};
const updateNote = async (slug, data) => {
  try {
    const res = await axios.put(`http://127.0.0.1:8008/notes/${slug}/`, data); // Ensure the URL ends with a slash to match REST API conventions
    const { data: updatedNote } = res; // Destructure to get updated note data

    // Optional: Update state if you're maintaining notes state in your component
    // setNotes(prevNotes => prevNotes.map(note => note.id === updatedNote.id ? updatedNote : note));

    toast.success("Note updated successfully!");
    console.log(updatedNote);
  } catch (err) {
    console.error("Error updating note:", err.message); // Log more context in the error
    toast.error("Failed to update the note. Please try again."); // User-friendly error message
  }
};



const deleteNote = async (slug) => {
  try {
    await axios.delete(`http://127.0.0.1:8008/notes/${slug}/`); // Ensure the URL ends with a slash if required by your API

    // Optional: Update state if you're maintaining notes state in your component
    // setNotes((prevNotes) => prevNotes.filter((note) => note.id !== slug));

  } catch (err) {
    console.error("Error deleting note:", err.message); // Provide more context in the error log
  }
};




  const router =createBrowserRouter(createRoutesFromElements(

      <Route path="/" element={<MainLayouts/>}>
        <Route index element={<HomePage notes={notes} loading={isLoading}/>}/>
        <Route path="/add-notes" element={<AddNotePage addNote={addNote}/>}/>
        <Route path="/notes/:slug" element={<NoteDetailPage deleteNote={deleteNote}/>}/>
        <Route path="/edit-note/:slug" element={<EditNotePage updateNote={updateNote}/>}/>



    </Route>
  ))
  return <RouterProvider router={router}/>
   
  
}

export default App