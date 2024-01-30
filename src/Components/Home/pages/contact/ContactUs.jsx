import React, { useState } from 'react';
import './ContactUs.css';
import Navbar from '../../components/Navbar';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      to: 'amritkum360@gmail.com',
      subject: formData.subject,
      body: `
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        Message: ${formData.message}
      `,
    };

    fetch('/your-server-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="cont-container container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="cont-form-group form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="cont-form-group form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="cont-form-group form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className="cont-form-group form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} required />
          </div>
          <div className="cont-form-group form-group">
            <button type="submit" className="btn btn-warning">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
