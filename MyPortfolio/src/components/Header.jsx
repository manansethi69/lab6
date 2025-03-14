import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container">

                <Link className="navbar-brand" to="/">My Portfolio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto" role="navigation" aria-label="Main navigation">

                        <li className="nav-item">
                            <Link className="nav-link" to="/" aria-label="Go to Home Page">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about" aria-label="Go to About Page">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/projects" aria-label="Go to Projects Page">Projects</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;
