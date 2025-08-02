import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

export default function EditBook() {
  const { id } = useParams();
  const { books, dispatch } = useContext(BookContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const bookToEdit = books.find(book => book.id === id);
    if (bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
    }
  }, [id, books]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'EDIT_BOOK',
      payload: { id, title, author },
    });
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          className="form-control mb-2"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />
        <button className="btn btn-primary">Update Book</button>
      </form>
    </div>
  );
}
