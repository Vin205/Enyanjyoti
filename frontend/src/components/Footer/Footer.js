import React from 'react';
import './footer.css';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-main">
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
        <div className="footer-socials">
          <h4>Socials</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">&copy; 2024 Edu@enyanjyoti. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
