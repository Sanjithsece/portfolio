import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { userData } from '../data/userData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_wssn9d8',     
        'template_ojgverq',     
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '93w7Sw4tdlOjcDJbo'     
      )
      .then(() => {
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('Failed to send message. Please try again.');
      });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <h2 className="section__title">Contact Me</h2>
      <div className="contact__container container">
        <p>
          Have a question or want to work together? Leave your details and I'll get back to you soon.
        </p>
        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="contact__input"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact__input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact__textarea full-width"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="button full-width">
            Send Message
          </button>
        </form>

        <div className="contact__info">
          <p>
            Email: <a href={`mailto:${userData.contact.email}`}>{userData.contact.email}</a>
          </p>
          <div className="contact__socials">
            <a href={userData.socials.github} target="_blank" rel="noopener noreferrer" className="contact__social-link"><FaGithub /></a>
            <a href={userData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="contact__social-link"><FaLinkedin /></a>
            <a href={userData.socials.twitter} target="_blank" rel="noopener noreferrer" className="contact__social-link"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
