import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        Have a question, suggestion, or concern? We're here to help! Reach out to us using the details below or fill out the contact form.
      </p>

      <div className="contact-details">
        <div>
          <h3>📍 Address</h3>
          <p>123 E-Shop Lane, Online City, IN 400001</p>
        </div>
        <div>
          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>
        </div>
        <div>
          <h3>📧 Email</h3>
          <p>support@shopease.com</p>
        </div>
      </div>

      <form className="contact-form">
        <h2>Send us a message</h2>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
