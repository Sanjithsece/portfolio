
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { userData } from '../data/userData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {

    const savedTheme = localStorage.getItem('theme');
   
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme ? savedTheme : (userPrefersDark ? 'dark' : 'light');
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

 
  useEffect(() => {

    document.body.className = theme === 'dark' ? 'dark-mode' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">{userData.name}</a>

        <div className={`nav__menu ${isOpen ? 'show-menu' : ''}`}>
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li className="nav__item" key={link.label}>
                <a href={link.href} className="nav__link" onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="nav__actions">
          <div className="theme__toggle" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </div>

          <div className="nav__toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;