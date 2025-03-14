import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light text-center py-3 mt-4">
            <div className="container">
                <p>© {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
