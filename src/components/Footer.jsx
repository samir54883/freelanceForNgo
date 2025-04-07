import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2025 Our NGO. All rights reserved.</p>
                <p className="footer-links">
                    <a href="/privacy">Privacy Policy</a> |
                    <a href="/terms">Terms of Use</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
