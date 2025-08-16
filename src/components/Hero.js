import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Ragini Shirwalkar</span>
            </h1>
            <h2 className="hero-subtitle">
              Full Stack Developer
            </h2>
            <p className="hero-description">
              Passionate about creating beautiful, functional, and user-friendly web applications. 
              I specialize in React, Node.js, and modern web technologies to bring ideas to life.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>

            <div className="hero-social">
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
          
          <div className="hero-image">
            <div className="hero-photo-container">
              <img 
                src="/ragini-photo.jpg" 
                alt="Ragini Shirwalkar - Full Stack Developer" 
                className="hero-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="photo-fallback">
                <div className="fallback-avatar">
                  <span>RS</span>
                </div>
              </div>
              <div className="photo-overlay"></div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <button 
            className="scroll-btn"
            onClick={() => scrollToSection('about')}
          >
            <FaArrowDown />
          </button>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;
