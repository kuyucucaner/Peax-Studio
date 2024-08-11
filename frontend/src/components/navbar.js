import React from "react";
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import PeaxStudioLogo from '../images/peaxstudio.svg';

const Navbar = () => {
    return ( 
        <nav>
        <img src={PeaxStudioLogo} alt="navbar-logo" className="navbar-logo" />
            <ul className="navbar-list">
                <li className="navbar-list-item">
                    <Link className="navbar-link" to='/'>Home</Link>
                </li>
                <li className="navbar-list-item">
                    <Link className="navbar-link" to='/about-us'>About Us</Link>
                </li>
                <li className="navbar-list-item">
                    <Link className="navbar-link" to='/projects'>Projects</Link>
                </li>
                <li className="navbar-list-item">
                    <Link className="navbar-link" to='/contact-us'>Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
