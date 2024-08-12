import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Project from './pages/project'
import './styles/scroll-bar.css';

function App() {
  return (
    <Router> 
       <Navbar />
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
