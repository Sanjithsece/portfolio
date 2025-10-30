// src/components/Education.jsx
import React from 'react';
import { userData } from '../data/userData';

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section__title">Education</h2>
      <div className="education__container container">
        {userData.education.map((edu, index) => (
          <div className="education__item" key={index}>
            <h3 className="education__degree">{edu.degree}</h3>
            <p className="education__institution">{edu.institution}</p>
            <span className="education__years">{edu.years}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;