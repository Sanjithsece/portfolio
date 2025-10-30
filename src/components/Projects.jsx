// src/components/Projects.jsx
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { userData } from '../data/userData';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section__title">Projects</h2>
      <div className="projects__container container">
        {userData.projects.map((project, index) => (
          <div className="project__card" key={index}>
            <h3 className="project__title">{project.title}</h3>
            <p className="project__description">{project.description}</p>
            <div className="project__tags">
              {project.tags.map((tag, tagIndex) => (
                <span className="project__tag" key={tagIndex}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="project__links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project__link-icon">
                <FaGithub />
              </a>
              {/* Add a live demo link if available */}
              {/* <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;