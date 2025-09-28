import React, { useState, useEffect } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Data
  const skills = {
    'Languages': ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL', 'HTML', 'CSS', 'Assembly', 'Bash'],
    'Web Development': ['React', 'Node.js', 'HTML5', 'CSS3', 'Express.js', 'REST APIs'],
    'Tools & Technologies': ['Git', 'Claude.ai', 'VS Code', 'GitHub', 'Figma']
  };

  const projects = [
    {
      title: "Volunteering Website",
      description: "A platform connecting volunteers with local non-profits, featuring event management and user profiles.",
      tech: ["React", "Node.js", "MUI"],
      github: "https://github.com/Luke-Cutter/CSI-280-Project?tab=readme-ov-file",
      live: "#",
      image: require('./assets/about-banner.png')
    },
    {
      title: "Learning Management System",
      description: "Collaborative task management tool with real-time updates and team features.",
      tech: ["React", "SQLite", "Node.js", "DBMS"],
      github: "#",
      live: "#",
      image: require('./assets/LMS.jpg')
    },
    {
      title: "Client and Server Chat Application",
      description: "Interactive weather application with location-based forecasts and data visualization.",
      tech: ["TCP/IP", "Sockets", "Python", "Threads", "Socket Programming"],
      github: "#",
      live: "#",
      image: require('./assets/ChatBox.jpg')
    }
  ];

  // Education data
  const education = {
    university: "Champlain College",
    degree: "Bachelor of Science in Computer Science and Innovation",
    minor: "Mathematics",
    graduationDate: "Expected May 2026",
    gpa: "3.9/4.0", 
    honors: [
      "Dean's List",
      "President's List"
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Software Requirements Engineering",
      "Database Management Systems",
      "Innovation III: Emerging Languages",
      "Software Design Patterns",
      "Network Programming",
      "Linear Algebra",
      "Computer Architecture",
      "Innovation II: Open Source Software Development",
      "Global IT & Ethics"
    ],
    achievements: [
      "Achieved Dean's List for 4 semesters and President's List for 2 semesters",
      "Collaborated on open-source projects, contributing code and documentation on GitHub"
    ]
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navigation 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      
      <Hero 
        scrollToSection={scrollToSection}
        darkMode={darkMode}
      />
      
      <About darkMode={darkMode} />
      
      <Skills 
        darkMode={darkMode}
        skills={skills}
      />
      
      <Projects 
        darkMode={darkMode}
        projects={projects}
      />
      
      <Education 
        darkMode={darkMode}
        education={education}
      />
      
      <Contact darkMode={darkMode} />
      
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;