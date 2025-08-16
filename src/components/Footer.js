import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ragini Shirwalkar</h3>
            <h4>Full Stack Developer</h4>
            <p>Creating beautiful and functional web applications with modern technologies.</p>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>shirwalkarragini@gmail.com</p>
            <p>Toronto, Ontario, Canada</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a 
                href="https://github.com/RaginiS19" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/raginishirwalkar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:shirwalkarragini@gmail.com"
                className="social-link"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2025 Ragini Shirwalkar. Made with <FaHeart className="heart" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
