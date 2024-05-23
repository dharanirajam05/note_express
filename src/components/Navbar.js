import React from 'react'
import './Navbar.css';

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/admin">Admin</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/user">User</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
        </ul>
        
        </nav>  

    </div>
  )
}

export default Navbar