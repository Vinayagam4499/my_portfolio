import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-content">
          <h4>Django Developer</h4>
          <h1>Vinayagam</h1>
          <h3>Full Stack Developer</h3>
          <p>
            I am a dynamic Python and Django Developer with over 1.5 years of hands-on experience designing, developing, testing, and maintaining scalable web applications. I excel at leveraging modern Python frameworks to build robust, user-centric solutions while thriving in collaborative, cross-functional teams. Driven by a passion for continuous improvement and innovation, I consistently deliver high-quality, efficient projects. I am eager to contribute my technical expertise and creative problem-solving skills to challenging full-stack roles.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn">Contact Me</a>
            <a href="Vinayagam_CV.pdf" className="btn btn-outline" download>Download Resume</a>
          </div>
          
          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/vk4499/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100069518176929" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://github.com/vinaythaagam" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://x.com/_vinay_jr" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/_vinay__jr/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://gravatar.com/vinayagamofficial" target="_blank" rel="noopener noreferrer"><i className="fab fa-grav"></i></a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
