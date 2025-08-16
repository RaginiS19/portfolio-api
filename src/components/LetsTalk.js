import React from 'react';
import { FaHandshake, FaRocket, FaUsers } from 'react-icons/fa';
import './LetsTalk.css';

const LetsTalk = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="lets-talk" className="lets-talk">
      <div className="lets-talk-container">
        <div className="lets-talk-content">
          <div className="lets-talk-text">
            <h2>Ready to Start Your Project?</h2>
            <p>
              I'm always excited to work on new and challenging projects. Whether you have a 
              specific idea in mind or need help bringing your vision to life, let's discuss 
              how we can work together to create something amazing.
            </p>
            
            <div className="lets-talk-features">
              <div className="feature">
                <div className="feature-icon">
                  <FaHandshake />
                </div>
                <div className="feature-content">
                  <h4>Collaborative Approach</h4>
                  <p>Working closely with you to understand your needs and deliver exactly what you envision.</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <FaRocket />
                </div>
                <div className="feature-content">
                  <h4>Fast Delivery</h4>
                  <p>Efficient development process with regular updates and quick turnaround times.</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <FaUsers />
                </div>
                <div className="feature-content">
                  <h4>Ongoing Support</h4>
                  <p>Continued support and maintenance to ensure your project stays up-to-date and performs optimally.</p>
                </div>
              </div>
            </div>

            <div className="lets-talk-cta">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Let's Discuss Your Project
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
