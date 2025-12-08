
import React from 'react';
import { userData } from '../data/userData';

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section__title">About Me</h2>
      <div className="about__container container">
        <img src={userData.about.image} alt="My Portrait" className="about__img" />
        <div className="about__text">
          <p>{userData.about.bio}</p>
        </div>
      </div>
    </section>
  );
};

export default About;