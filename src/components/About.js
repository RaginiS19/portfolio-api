import React from 'react';
import { FaCode, FaHeart, FaLightbulb, FaUser, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-main">
            <div className="about-intro">
              <div className="intro-header">
                <div className="intro-icon">
                  <FaUser />
                </div>
                <h3>Hello! I'm Ragini Shirwalkar</h3>
              </div>
              <p>
                I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
                I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
              </p>
              <p>
                With expertise in React, Node.js, and MongoDB, I enjoy building complete web solutions 
                from frontend to backend. I'm always eager to learn new technologies and best practices 
                to deliver the best possible user experience.
              </p>
            </div>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <FaCode />
                </div>
                <div className="feature-content">
                  <h4>Development</h4>
                  <p>Specialized in full-stack development with modern frameworks and cloud technologies.</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <FaHeart />
                </div>
                <div className="feature-content">
                  <h4>Passion</h4>
                  <p>Dedicated to creating meaningful applications that make a difference in people's lives.</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <FaLightbulb />
                </div>
                <div className="feature-content">
                  <h4>Innovation</h4>
                  <p>Always exploring new technologies and approaches to solve complex problems creatively.</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <FaRocket />
                </div>
                <div className="feature-content">
                  <h4>Growth</h4>
                  <p>Continuously learning and improving my skills to stay current with industry trends.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
