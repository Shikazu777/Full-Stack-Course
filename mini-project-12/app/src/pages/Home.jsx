import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { Link } from 'react-router-dom';

export default function Home() {
  const { books, dispatch } = useContext(BookContext);

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_BOOK', payload: id });
  };

  return (
    <div className="container mt-4">
      <h1>Book Lists</h1>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>B no.</th>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id}>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <Link className="btn btn-primary btn-sm mx-1" to={`/view/${book.id}`}>View</Link>
                <Link className="btn btn-warning btn-sm mx-1" to={`/edit/${book.id}`}>Edit</Link>
                <button className="btn btn-danger btn-sm mx-1" onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
