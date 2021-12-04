import React from 'react'
import logo from './logo.svg';
import Home from '../src/components/Home/index';
import About from '../src/components/About/index';
import Social from '../src/components/Social/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/page-3" element={<Social />}/>
      </Routes>
    </Router>
  );
}

export default App;
