// src/components/Hero.jsx
import React from 'react';
import { userData } from '../data/userData';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__container container">
        <h1 className="hero__title">
          Hi, I'm {userData.name}
        </h1>
        <h3 className="hero__subtitle">{userData.title}</h3>
        <p className="hero__description">{userData.tagline}</p>
        <div className="hero__buttons">
          <a href="#projects" className="button">
            View My Work
          </a>
          <a href={userData.resume} download className="button button--secondary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;