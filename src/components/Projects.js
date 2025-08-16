import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects = ({ projects, loading }) => {
  const getProjectImage = (projectTitle) => {
    const title = projectTitle.toLowerCase();
    if (title.includes('meal')) {
      return 'https://via.placeholder.com/400x250/8B7355/ffffff?text=Meal+Genie';
    } else if (title.includes('glitch') || title.includes('maze')) {
      return 'https://via.placeholder.com/400x250/6B7280/ffffff?text=Glitch+Maze';
    } else if (title.includes('portfolio')) {
      return 'https://via.placeholder.com/400x250/9CA3AF/ffffff?text=Portfolio+Website';
    } else {
      return 'https://via.placeholder.com/400x250/D1D5DB/ffffff?text=Project';
    }
  };

  const getProjectTechnologies = (projectTitle) => {
    const title = projectTitle.toLowerCase();
    if (title.includes('meal')) {
      return ['React', 'JavaScript', 'CSS3', 'API Integration'];
    } else if (title.includes('glitch') || title.includes('maze')) {
      return ['React', 'JavaScript', 'Canvas API', 'Game Logic'];
    } else if (title.includes('portfolio')) {
      return ['React', 'Node.js', 'MongoDB', 'Express'];
    } else {
      return ['React', 'JavaScript', 'HTML/CSS', 'Web Technologies'];
    }
  };

  const getProjectLinks = (projectTitle) => {
    const title = projectTitle.toLowerCase();
    if (title.includes('meal')) {
      return { 
        live: 'https://meal-genie-26c853.netlify.app', 
        github: 'https://github.com/RaginiS19/meal-genie' 
      };
    } else if (title.includes('glitch') || title.includes('maze')) {
      return { 
        live: 'https://glitch-maze-6s5uobaj7-raginis19s-projects.vercel.app', 
        github: 'https://github.com/RaginiS19/glitch-maze' 
      };
    } else if (title.includes('portfolio')) {
      return { 
        live: 'https://ragini-portfolio.vercel.app', 
        github: 'https://github.com/RaginiS19/portfolio-frontend' 
      };
    } else {
      return { 
        live: 'https://github.com/RaginiS19', 
        github: 'https://github.com/RaginiS19' 
      };
    }
  };

  if (loading) {
    return (
      <section id="projects" className="projects">
        <div className="projects-container">
          <div className="section-header">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">Some of my recent work</p>
          </div>
          <div className="projects-grid">
            {[1, 2, 3].map((item) => (
              <div key={item} className="project-card loading">
                <div className="project-image skeleton"></div>
                <div className="project-content">
                  <div className="project-title skeleton-text"></div>
                  <div className="project-description skeleton-text"></div>
                  <div className="project-tech skeleton-text"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const technologies = getProjectTechnologies(project.title);
            const links = getProjectLinks(project.title);
            
            return (
              <div key={project._id} className="project-card">
                <div className="project-image">
                  <img src={getProjectImage(project.title)} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt />
                      </a>
                      <a 
                        href={links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        <FaCode />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a 
            href="https://github.com/RaginiS19" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
