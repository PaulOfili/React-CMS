import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function NavBar({navLinks}) {
    return (
        <nav className='nav'>
            <h3>
                <Link to='/'>
                    CMS
                </Link>
            </h3>

            <ul className='nav-links'>
                {
                    navLinks.map(navLink => (
                        <li key={navLink.value}>
                            <Link to={`/${navLink.value}`}>
                                {navLink.text}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default NavBar;
