import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-secondary p-3">
      <Link className="navbar-brand text-white" to="/">Guvi Book Library</Link>
      <div>
        <Link className="btn btn-light mx-2" to="/">Home</Link>
        <Link className="btn btn-light" to="/add">Add Book</Link>
      </div>
    </nav>
  );
}
