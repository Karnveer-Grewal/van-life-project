import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header--container'>
      <Link to='/' className='header--title'>
        #VANLIFE
      </Link>
      <nav className='header--nav'>
        <Link to='/host'>Host</Link>
        <Link to='/about'>About</Link>
        <Link to='/vans'>Vans</Link>
      </nav>
    </header>
  );
};

export default Header;
