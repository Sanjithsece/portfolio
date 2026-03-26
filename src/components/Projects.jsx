import React, { useEffect, useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { userData } from '../data/userData';

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState({});
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const cardIndex = Number(entry.target.dataset.index);
          setVisibleCards((current) => {
            if (current[cardIndex]) {
              return current;
            }

            return {
              ...current,
              [cardIndex]: true,
            };
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects section">
      <div className="projects__shell container">
        <div className="projects__heading">
          <span className="projects__eyebrow">Selected Work</span>
          <h2 className="section__title projects__title">Projects</h2>
          <p className="projects__intro">
            A mix of full-stack products, analytics dashboards, and problem-focused builds with polished interaction and clean implementation.
          </p>
        </div>

        <div className="projects__container">
        {userData.projects.map((project, index) => (
          <div
            className={`project__card ${visibleCards[index] ? 'project__card--visible' : ''}`}
            key={project.title}
            data-index={index}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <div className="project__card-glow" aria-hidden="true"></div>
            <div className="project__card-content">
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
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project__link-icon"
                aria-label={`Open ${project.title} on GitHub`}
              >
                <FaGithub />
              </a>
            </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
