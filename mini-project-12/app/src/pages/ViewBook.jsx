import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

export default function ViewBook() {
  const { id } = useParams();
  const { books } = useContext(BookContext);

  const book = books.find(book => book.id === id);

  if (!book) {
    return <div className="container mt-4"><h4>Book not found!</h4></div>;
  }

  return (
    <div className="container mt-4">
      <h2>Book Details</h2>
      <p><strong>Title:</strong> {book.title}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <Link to="/" className="btn btn-secondary mt-2">Back to Home</Link>
    </div>
  );
}
