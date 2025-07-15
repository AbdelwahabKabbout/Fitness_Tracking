import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => (
    <nav className="navbar">
        <ul className="navlist">
            <li className="navitem">
                <Link to="/">Home</Link>
            </li>
            <li className="navitem">
                <Link to="/about">About</Link>
            </li>
            <li className="navitem">
                <Link to="/services">Services</Link>
            </li>
            <li className="navitem">
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
)

export default NavBar;