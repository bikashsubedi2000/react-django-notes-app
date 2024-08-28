import React from 'react';
import './modal.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Modal = ({ handleIsOpen, deleteNote }) => {
  const navigate = useNavigate();

  const handleDeleteNote = async () => {
    try {
      await deleteNote(); // Ensure deleteNote returns a promise if it's asynchronous
      toast.success("Deleted successfully");
      navigate("/"); // Redirect to home or another page
    } catch (error) {
      console.error("Error deleting note:", error.message);
      toast.error("Failed to delete note. Please try again.");
    }
  };

  return (
    <div className="c-modal-overlay">
      <div className="c-modal">
        <button className="close-button" onClick={handleIsOpen}>×</button>
        <div className="c-modal-content">
          <h2>Delete Note</h2>
          <p>Are you sure you want to delete this note?</p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-danger me-3" onClick={handleDeleteNote}>Delete</button>
            <button className="btn btn-primary" onClick={handleIsOpen}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
