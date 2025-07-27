import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you will create a Header.css for specific styles

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="branding">
                <h1>James' Portfolio</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;