import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
const NavBar = () => {


  return (
    <div>
        <h2> <Link to = "/Hungry" className='link'>Hungry</Link></h2>
        <p className='p'><Link to = "/about" className='link2'>About</Link></p>
</div>
  );
};

export default NavBar;
