import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-image">
            {/* Use the relative path starting from the public folder */}
            <img src="/images/vinayagam.jpeg" alt="Vinayagam" />
          </div>
          <div className="about-text">
            <h3>Hello, I'm Vinayagam</h3>
            <p>
              I am a passionate Full Stack Developer specializing in Python and Django with over 1.5 years of professional experience. I have a strong background in building scalable and high-performance web applications that deliver an exceptional user experience. I pride myself on leveraging modern frameworks, technologies, and best practices to create dynamic, robust solutions for both startups and large enterprises.
            </p>
            <p>
              Throughout my career, I’ve had the opportunity to work on a wide range of projects—from building comprehensive web dashboards to automating business processes with advanced bot integrations. My expertise spans back-end development, API design, database management, and front-end technologies such as JavaScript, HTML, and CSS. I am committed to continuous learning, adapting to new challenges, and collaborating effectively within cross-functional teams to deliver high-quality solutions.
            </p>
            <p>
              I am excitied to contribute my skills to challenging projects that allow me to innovate, solve complex problems, and ultimately create impactful software. If you're looking for a driven, adaptable, and technically proficient developer who thrives in a collaborative environment, I would love to connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
