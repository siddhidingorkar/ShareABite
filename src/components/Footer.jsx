// components/Footer.js

import React from 'react';
import './Footer.css'; // Import a separate CSS file for styling (create this file)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p>&copy; 2023 Your Website. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
