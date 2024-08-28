import React, { useEffect, useState } from 'react';
import './AddNotePage.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditNotePage = ({ updateNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8008/notes/${slug}/`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setBody(res.data.body);
        setCategory(res.data.category);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [slug]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty and prevent submission
    if (!title || !body || !category) {
      return;
    }

    const updatedNoteObject = {
      title: title,
      body: body,
      category: category,
    };

    updateNote(slug, updatedNoteObject); // Pass slug and updated data to updateNote function

    // Navigate to the updated note's page or notes list
    navigate(`/notes/${slug}`);

    console.log(updatedNoteObject);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5>Edit Note</h5>
      <div className="mb-3">
        <label htmlFor="titleInput" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="titleInput"
          placeholder="Enter note's title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="bodyTextarea" className="form-label">
          Content
        </label>
        <textarea
          className="form-control"
          id="bodyTextarea"
          rows={4}
          placeholder="Enter note's content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="categorySelect" className="form-label">
          Note's Category
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ height: '40px' }}
        >
          <option disabled value="">
            Pick a category
          </option>
          <option value="BUSINESS">Business</option>
          <option value="PERSONAL">Personal</option>
          <option value="IMPORTANT">Important</option>
        </select>
      </div>

      <button className="btn btn-primary d-flex justify-content-center" style={{ width: '100%' }}>
        Edit Note
      </button>
    </form>
  );
};

export default EditNotePage;
