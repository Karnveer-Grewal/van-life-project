import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Vans from './components/Vans';
import VanDetail from './components/VanDetail';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <header>
        <Link to='/'>#VANLIFE</Link>
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<VanDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
