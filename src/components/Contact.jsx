import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');  // Set status to "Sending..."

    // Send form data to the backend API
    try {
      const res = await fetch('http://localhost:3000/#contact', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await res.json();

      if (result.success) {
        setStatus('Message sent successfully!');
        // Reset form fields
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Error sending message: ' + result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('An error occurred while sending your message.');
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Me</h2>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>If you have any questions or would like to work together, feel free to reach out via email or phone.</p>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-envelope"></i></div>
              <div className="contact-item-info">
                <h4>Email</h4>
                <a href="mailto:vinayagamofficial@gmail.com">vinayagamofficial@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-phone"></i></div>
              <div className="contact-item-info">
                <h4>Phone</h4>
                <p>+91-9025533402</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div className="contact-item-info">
                <h4>Location</h4>
                <p>India</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>

            {/* Display status message */}
            {status && <p className="status-message">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
