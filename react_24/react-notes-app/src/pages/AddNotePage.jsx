import React, { useState } from 'react';
import './AddNotePage.css';
import { Navigate, useNavigate } from 'react-router-dom';




const AddNotePage = ({addNote}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const Navigate= useNavigate()

  const newNote = {
    title: title,
    body: body,
    category: category,
  };



  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Corrected logical condition to check if any field is empty
    if (!title || !body || !category) {
      return; // Prevent submission if any field is empty
    }
  
    addNote(newNote); // Assuming addNote is a synchronous function; otherwise, handle async/await
  
    Navigate("/"); // Corrected navigate function call
  
    console.log(newNote);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h5>Add New Note</h5>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter note's title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Content
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={4}
          placeholder="Enter note's content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Notes category
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ height: "40px" }}
        >
          <option value="">Pick a category</option>
          <option value="BUSINESS">Business</option>
          <option value="PERSONAL">Personal</option>
          <option value="IMPORTANT">Important</option>
        </select>
      </div>

      <button className="btn btn-primary d-flex justify-content-center" style={{ width: "100%" }}>
        Add Note
      </button>
    </form>
  );
}

export default AddNotePage;
