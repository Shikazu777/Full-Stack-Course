import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Login from './components/Auth/login';
import Signup from './components/Auth/signup';
import Profile from './pages/profile';


function App() {
  return (
    <Router>

      <Header /> 
      <Container>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
        
      </Container>
    </Router>
  )
}

export default App