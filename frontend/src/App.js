import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Product from './pages/product'
import Portfolio from './pages/portfolio'
import Skill from './pages/skill'
import './styles/scroll-bar.css';

function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <About />      
          <Portfolio /> 
          <Product />
          <Skill />
          <Contact />
        </main>
      </div>
    </Router>
  );
}

export default App;
