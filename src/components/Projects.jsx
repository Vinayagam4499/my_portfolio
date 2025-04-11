import React, { useState } from 'react';

// Sample projects data
const projects = [
  {
    name: 'Solving India\'s Problems',
    description: 'Innovative solution tackling real-world issues.',
    category: 'client',
    image: 'solving-india.jpg',
    link: 'https://solvingindiasproblems.com/'
  },
  {
    name: 'JJ Borewells',
    description: 'Robust borewell solutions online.',
    category: 'client',
    image: 'https://jjborewell.com//static/website/assets/images/logo/logo_white.png',
    link: 'https://jjborewell.com/'
  },
  {
    name: 'Karunai Karangal',
    description: 'Empowering communities through tech-driven philanthropy.',
    category: 'client',
    image: 'https://karunaikarangalindia.org/static/website/assets/images/icon/favicon.webp',
    link: 'https://karunaikarangalindia.org/'
  },
  {
    name: 'Global Life Tree Foundation',
    description: 'Supporting global initiatives for sustainable development.',
    category: 'client',
    image: 'global-life-tree.jpg',
    link: 'https://globallifetreefoundation.world/'
  },
  {
    name: 'Sri Sankarapuram',
    description: 'Efficient online payment and management system.',
    category: 'client',
    image: 'https://quickpay.srisankarapuram.com/static/favicon.ico',
    link: 'https://quickpay.srisankarapuram.com/'
  },
  {
    name: 'Tuluworld',
    description: 'Innovative project contributing to real-world impact.',
    category: 'client',
    image: 'https://www.tuluworld.org.in/static/tulu/assets/img/logo/favicon-tulu.png',
    link: 'https://www.tuluworld.org.in/'
  },
  {
    name: 'WhatsApp & Email Bots',
    description: 'Developed Meta WhatsApp API integrations and automated bots for messaging, media sharing, and email campaigns using Python.',
    category: 'bot',
    image: 'whatsapp-bot.jpg',
    link: 'https://thaagam.org'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterClick = (category) => {
    setFilter(category);
  };

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        {/* Filter Buttons */}
        <div className="projects-filter">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === 'client' ? 'active' : ''}`}
            onClick={() => handleFilterClick('client')}
          >
            Client Projects
          </button>
          <button
            className={`filter-btn ${filter === 'bot' ? 'active' : ''}`}
            onClick={() => handleFilterClick('bot')}
          >
            API/Bot Projects
          </button>
        </div>

        <div className="projects-grid">
          {/* Map through filtered projects */}
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card" data-category={project.category}>
              <div className="project-image">
                <img src={project.image} alt={project.name} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-tags">
                  <span className="project-tag">{project.category}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
