import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div id='nav'>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>            
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/pricing'>Pricing</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar