import React, { useEffect, useState } from 'react'
import { BiSolidTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import "./NotePageDetail.css"
import { Link, useParams } from 'react-router-dom';
import axios from "axios"
import Modal from "../components/Modal";

const NoteDetailPage = ({deleteNote}) => {
  const [note, setNote] = useState({});
  const { slug } = useParams();
  const[isOpen,setIsOpen]=useState(false)
  
  
  const handleIsOpne=()=>{
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8008/notes/${slug}`)
      .then((res) => {
        setNote(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [slug]); 




  return (
    <>
    <div className="note-container">
    <h3 className="title">{note.title}</h3>
    <span className="d-flex justify-content-center">
    <p className="note-date font-12 text-muted me-5"> created: {note.created}</p>
    <p className="note-date font-12 text-muted me-5">last updated: {note.updated}</p>
    </span>
    <span className="button-group">
      <Link to={`/edit-note/${slug}`}>  <button className="btn btn-primary"><FiEdit /><span>Edit</span></button>
</Link>
      <button className="btn btn-danger" onClick={handleIsOpne}>
        <BiSolidTrashAlt /><span>Delete</span></button>
    </span>
    <p className="description">
      {note.body}
    </p>



    

  </div>
  {isOpen && <Modal handleIsOpen={handleIsOpne} deleteNote={()=>deleteNote(slug)}/>}
  </>
  )
}

export default NoteDetailPage