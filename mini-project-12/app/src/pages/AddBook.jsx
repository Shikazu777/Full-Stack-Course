import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookContext } from '../context/BookContext';
import { v4 as uuidv4 } from 'uuid';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { dispatch } = useContext(BookContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch({ type: 'ADD_BOOK', payload: newBook });
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <input className="form-control mb-2" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
        <button className="btn btn-success">Add Book</button>
      </form>
    </div>
  );
}
