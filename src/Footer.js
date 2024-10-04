import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3 className="footer-title">Ready to Elevate Your Future?</h3>
        <p className="footer-description">
          Dive into our resources for education, career opportunities, and financial assistance. Unlock your potential with us!
        </p>
        <div className="footer-buttons">
          <button className="btn btn-light" id="explore-education">Explore Education</button>
          <button className="btn btn-light">Start Your Career</button>
          <button className="btn btn-light">Learn About Grants</button>
        </div>
      </div>
      <hr />
      <div className="social-links">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <p className="copyright">&copy; 2024 Edu@enyanjyoti. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
