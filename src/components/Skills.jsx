import React from 'react';

const skills = [
  { icon: 'fab fa-python', name: 'Python' },
  { icon: 'fab fa-code', name: 'Django Framework' },
  { icon: 'fab fa-html5', name: 'HTML, CSS, Bootstrap' },
  { icon: 'fas fa-database', name: 'MySQL Database' },
  { icon: 'fas fa-database', name: 'PostgreSQL' },
  { icon: 'fas fa-network-wired', name: 'Rest API' },
  { icon: 'fab fa-js-square', name: 'Javascript & Ajax' },
  { icon: 'fab fa-github', name: 'Git & Github' },
  { icon: 'fas fa-fire', name: 'Hotjar' },
  { icon: 'fab fa-slack', name: 'Slack' },
  { icon: 'fab fa-whatsapp', name: 'WhatsApp API' }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="skills-container">
          {/* Map through skills array to render each skill card */}
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
