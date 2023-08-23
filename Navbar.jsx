import React from 'react'
import'./Navbar.css'
import img from '../sml.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='container'>
        <div className='logo'>
            <img src={img} alt="logo" />
        </div>
        <div  className='Navbar'>
         <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar