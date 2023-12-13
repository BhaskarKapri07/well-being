import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Mental Well-being Site. All rights reserved.</p>
        <p>Designed for mental health awareness and support.</p>
      </div>
    </footer>
  );
}

export default Footer;
