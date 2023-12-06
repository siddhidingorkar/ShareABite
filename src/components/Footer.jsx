import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#2a284d',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
    
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '20 20px',
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2023 Open Minds</p>
          <ul className="footer-links">
            <li><a style={linkStyle} href="#">About</a></li>
            <li><a style={linkStyle} href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;