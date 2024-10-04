import React from 'react'
import './footer.css';

function Footer() {
  return (
    <footer>
    <div class="footer-content">
      <h3>Ready to Elevate Your Future?</h3>
      <p>
        Dive into our resources for education, career opportunities, and financial assistance. Unlock your potential with us!
      </p>
      <div class="footer-buttons">
        <button class="btn" id="explore-education">Explore Education</button>
        <button class="btn">Start Your Career</button>
        <button class="btn">Learn About Grants</button>
      </div>
    </div>
    <hr />
    <div class="social-links">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
    <p class="copyright">&copy; 2024 Edu@enyanjyoti. All rights reserved.</p>
  </footer>
  

   
  )
}

export default Footer