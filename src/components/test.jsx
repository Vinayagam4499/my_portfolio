import React from 'react';

const ResumeModal = () => {
  return (
    <div id="resumeModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <div className="resume-header">
          <h2>Vinayagam's Resume</h2>
        </div>
        <div className="resume-section">
          <h3>Professional Experience</h3>
          <div className="resume-item">
            <h4>Thaagam Foundation</h4>
            <h5>2023 - Present</h5>
            <p>Developed and maintained scalable web applications...</p>
          </div>
        </div>
        <div className="download-btn">
          <a href="Vinayagam_Resume.pdf" download>Download Resume</a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
