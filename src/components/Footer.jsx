// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { userData } from '../data/userData';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__socials">
            <a href={userData.socials.github} target="_blank" rel="noopener noreferrer" className="footer__social-link"><FaGithub /></a>
            <a href={userData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="footer__social-link"><FaLinkedin /></a>
            <a href={userData.socials.twitter} target="_blank" rel="noopener noreferrer" className="footer__social-link"><FaTwitter /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} {userData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;