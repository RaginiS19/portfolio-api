import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>

        <div className="experience-content">
          <div className="experience-section">
            <h3 className="section-subtitle">Work Experience</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon">
                  <FaBriefcase />
                </div>
                <div className="timeline-content">
                  <h4>Full Stack Developer</h4>
                  <p className="timeline-company">Freelance</p>
                  <div className="timeline-details">
                    <span className="timeline-date">
                      <FaCalendarAlt />
                      2023 - Present
                    </span>
                    <span className="timeline-location">
                      <FaMapMarkerAlt />
                      Remote
                    </span>
                  </div>
                  <p className="timeline-description">
                    Developing full-stack web applications using React, Node.js, and MongoDB. 
                    Creating responsive and user-friendly interfaces with modern design principles.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">
                  <FaBriefcase />
                </div>
                <div className="timeline-content">
                  <h4>Web Developer Intern</h4>
                  <p className="timeline-company">Tech Startup</p>
                  <div className="timeline-details">
                    <span className="timeline-date">
                      <FaCalendarAlt />
                      2022 - 2023
                    </span>
                    <span className="timeline-location">
                      <FaMapMarkerAlt />
                      Toronto, ON
                    </span>
                  </div>
                  <p className="timeline-description">
                    Collaborated with development team to build and maintain web applications. 
                    Implemented responsive designs and optimized user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="experience-section">
            <h3 className="section-subtitle">Education</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon education">
                  <FaGraduationCap />
                </div>
                <div className="timeline-content">
                  <h4>Web Development</h4>
                  <p className="timeline-company">Humber College</p>
                  <div className="timeline-details">
                    <span className="timeline-date">
                      <FaCalendarAlt />
                      2025
                    </span>
                    <span className="timeline-location">
                      <FaMapMarkerAlt />
                      Toronto, ON
                    </span>
                  </div>
                  <p className="timeline-description">
                    Currently pursuing web development program focusing on modern technologies 
                    and industry best practices for full-stack development.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon education">
                  <FaGraduationCap />
                </div>
                <div className="timeline-content">
                  <h4>Post Graduate Diploma in Design</h4>
                  <p className="timeline-company">Humber College</p>
                  <div className="timeline-details">
                    <span className="timeline-date">
                      <FaCalendarAlt />
                      2019 - 2021
                    </span>
                    <span className="timeline-location">
                      <FaMapMarkerAlt />
                      Toronto, ON
                    </span>
                  </div>
                  <p className="timeline-description">
                    Completed advanced design program focusing on user experience, visual design, 
                    and creative problem-solving in digital environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
