import React from 'react'
import logo from '../../assets/Logo airbnb.png'
import { CiGlobe } from "react-icons/ci";
import './NavBar.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div id = 'navbar'>
        <img id = 'logo' src ={logo} alt = 'logo' />
        <div className = 'nav-links'>
            <Link to = '/'>Home</Link>
            <Link to = '/'>Map</Link>
        </div>
        <div id = 'navbar-rightside'>
            <CiGlobe id='nav-globe-logo'/>
            <Link>Menu</Link>
        </div>
    </div>
  )
}

export default NavBar