import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Core Team', path: '/core-team' },
    { name: 'Events', path: '/events' },
    { name: 'Donate', path: '/donate' },
    { name: 'Contact Us', path: '/contact-us' },
];

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="header">
            <div className="nav-container">
                <div className="logo">Our NGO</div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <nav className={`nav ${isOpen ? 'open' : ''}`}>
                    <ul>
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={location.pathname === link.path ? 'active' : ''}
                                    onClick={() => setIsOpen(false)} // close on link click
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
