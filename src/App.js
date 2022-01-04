import React from 'react'
import logo from './logo.svg';
import Home from '../src/components/Home/index';
import About from '../src/components/About/index';
import Social from '../src/components/Social/index';
import Playlists from '../src/components/Playlists/index';
import Contact from '../src/components/Contact/index';
import Episdoes from '../src/components/Episodes/index';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/page-3" element={<Social />}/>
        <Route path="/Playlists" element={<Playlists />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Browse-Episodes" element={<Episdoes />}/>
      </Routes>
    </Router>
  );
}

export default App;
