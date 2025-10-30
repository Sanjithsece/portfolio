// src/components/Skills.jsx
import React from 'react';
import { userData } from '../data/userData';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section__title">Skills</h2>
      <div className="skills__container container">
        {userData.skills.map((skill, index) => (
          <div className="skills__item" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;