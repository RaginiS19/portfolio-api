import React from 'react';
import { FaCode, FaDatabase, FaTools, FaLaptopCode } from 'react-icons/fa';
import './Skills.css';

const Skills = ({ skills, loading }) => {
  const getSkillIcon = (skillName) => {
    const name = skillName.toLowerCase();
    if (name.includes('react') || name.includes('javascript') || name.includes('html') || name.includes('css')) {
      return <FaCode />;
    } else if (name.includes('mongodb') || name.includes('database') || name.includes('sql')) {
      return <FaDatabase />;
    } else if (name.includes('node') || name.includes('express') || name.includes('git')) {
      return <FaTools />;
    } else {
      return <FaLaptopCode />;
    }
  };

  const getSkillLevel = (level) => {
    const levels = {
      'beginner': 25,
      'intermediate': 60,
      'advanced': 90,
      'expert': 100
    };
    return levels[level.toLowerCase()] || 50;
  };

  const getSkillColor = (level) => {
    // Use neutral colors that match the portfolio theme
    const colors = {
      'beginner': '#8B7355',
      'intermediate': '#A0522D',
      'advanced': '#8B7355',
      'expert': '#A0522D'
    };
    return colors[level.toLowerCase()] || '#8B7355';
  };

  if (loading) {
    return (
      <section id="skills" className="skills">
        <div className="skills-container">
          <div className="section-header">
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>
          <div className="skills-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="skill-card loading">
                <div className="skill-icon skeleton"></div>
                <div className="skill-content">
                  <div className="skill-name skeleton-text"></div>
                  <div className="skill-level skeleton-text"></div>
                  <div className="skill-progress skeleton"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill._id} className="skill-card">
              <div className="skill-icon">
                {getSkillIcon(skill.name)}
              </div>
              <div className="skill-content">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-level">{skill.level}</p>
                <div className="skill-progress">
                  <div 
                    className="skill-progress-bar"
                    style={{
                      width: `${getSkillLevel(skill.level)}%`,
                      backgroundColor: getSkillColor(skill.level)
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <h3>Frontend Development</h3>
            <p>React, JavaScript, HTML5, CSS3, Responsive Design</p>
          </div>
          <div className="summary-card">
            <h3>Backend Development</h3>
            <p>Node.js, Express.js, RESTful APIs, Server-side Logic</p>
          </div>
          <div className="summary-card">
            <h3>Database & Tools</h3>
            <p>MongoDB, Git, VS Code, Postman, Deployment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
