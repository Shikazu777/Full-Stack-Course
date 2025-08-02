import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form, FormControl, Modal } from 'react-bootstrap';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const apiKey = '';

  const searchMovies = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`)
      setMovies(response.data.Search || []);
    }
  }

  const getMovieDetails = async(id)=>{
    try{
     const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
      setSelectedMovie(response.data);
    } catch (error) {
      setError(error);
      setShowModal(true);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setError(null);
  };

  return (
    <div>App</div>
  );
}