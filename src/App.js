import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import LetsTalk from './components/LetsTalk';
import Footer from './components/Footer';

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsResponse, skillsResponse] = await Promise.all([
          fetch('https://ragini-portfolio-api.onrender.com/api/projects'),
          fetch('https://ragini-portfolio-api.onrender.com/api/skills')
        ]);

        const projectsData = await projectsResponse.json();
        const skillsData = await skillsResponse.json();

        setProjects(projectsData);
        setSkills(skillsData);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Fallback data with real projects
        setProjects([
          {
            _id: '1',
            title: 'Meal Genie',
            description: 'A recipe recommendation app that suggests meals based on user preferences and available ingredients. Built with modern web technologies for an intuitive cooking experience.'
          },
          {
            _id: '2',
            title: 'Glitch Maze',
            description: 'An interactive maze game with glitch effects and challenging gameplay mechanics. Features dynamic obstacles and smooth user interactions.'
          },
          {
            _id: '3',
            title: 'Portfolio Website',
            description: 'A modern React portfolio website with dynamic content from API integration, showcasing professional projects and skills.'
          }
        ]);
        setSkills([
          { _id: '1', name: 'React', level: 'Advanced' },
          { _id: '2', name: 'JavaScript', level: 'Advanced' },
          { _id: '3', name: 'Node.js', level: 'Intermediate' },
          { _id: '4', name: 'MongoDB', level: 'Intermediate' },
          { _id: '5', name: 'HTML/CSS', level: 'Advanced' },
          { _id: '6', name: 'Express.js', level: 'Intermediate' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects projects={projects} loading={loading} />
        <Skills skills={skills} loading={loading} />
        <Contact />
        <LetsTalk />
      </main>
      <Footer />
    </div>
  );
}

export default App;
