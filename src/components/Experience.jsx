import React from 'react';

// Sample work experience data
const experience = [
  {
    date: '2023 - Present',
    company: 'Thaagam Foundation',
    role: 'Website & Dashboard',
    description: 'Developed, tested, and maintained the thaagam.org website & dashboard using Django, HTMX, MySQL, HTML, CSS (BS5), JS, and Ajax. Integrated Razorpay and Easebuzz for secure payments, streamlining donation support across 10+ categories.',
    link: 'https://thaagam.org',
    liveText: 'Live at thaagam.org'
  },
  {
    date: '2023 - Present',
    company: 'Thaagam HR Dashboard',
    role: 'Candidate Management',
    description: 'Built a user-friendly HR dashboard using Django, MySQL, HTML, CSS, and JavaScript. The platform collects candidate details via form submissions, stores data, and simplifies HR verification and shortlisting.',
    link: 'https://hr.thaagam.ngo/',
    liveText: 'Live at thaagam.ngo/hr/candidate/'
  },
  // Add more experience as needed
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-title">
          <h2>Work Experience</h2>
        </div>
        <div className="timeline">
          {/* Map through experience array to dynamically create experience items */}
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <span className="timeline-date">{exp.date}</span>
                <h3>{exp.company}</h3>
                <h4>{exp.role}</h4>
                <p>{exp.description}</p>
                <p>
                  <a href={exp.link} target="_blank" rel="noopener noreferrer">
                    {exp.liveText}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
