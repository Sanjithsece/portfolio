import React from 'react';
import { FaGithub } from 'react-icons/fa';


const projects = [
  {
    title: "MoneyBridge",
    description: "Full-stack web app for peer-to-peer exchange of UPI and physical cash. Features secure JWT authentication, request handling, and notifications.",
    tags: ["Spring Boot", "React.js", "JWT", "REST APIs"],
    githubLink: "https://github.com/Sanjithsece/MoneyBridge",
  },
  
  { 
    title: "AI Ambulance Detection",
    description: "An AI/ML project that uses computer vision to detect ambulances in traffic camera feeds and automatically change signals to prioritize them.",
    tags: ["Python", "AI/ML", "Computer Vision", "OpenCV"],
    githubLink: "https://github.com/Sanjithsece",
  },
  
  {
    title: "Foodie App",
    description: "Full-stack food ordering platform with menu browsing, cart, and order tracking features. Deployed on Vercel.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    githubLink: "https://github.com/Sanjithsece",
  },
  {
    title: "Trip Planner",
    description: "Console-based Python app that generates optimized travel itineraries and route suggestions.",
    tags: ["Python"],
    githubLink: "https://github.com/Sanjithsece",
  },
  {
    title: "Smart Blind Stick – IoT-Based Assistive Technology",
    description: "IoT device for visually impaired individuals using ultrasonic sensors, GPS, and vibration feedback for obstacle detection and navigation.",
    tags: ["IoT", "Arduino", "Sensors", "Embedded Systems"],
    githubLink: "https://github.com/Sanjithsece",
  },
];


const sectionStyles = {
  padding: '4rem 1rem',
  maxWidth: '1200px',
  margin: '0 auto',
};

const sectionTitleStyles = {
  fontSize: '2.5rem',
  fontWeight: '700',
  textAlign: 'center',
  marginBottom: '3rem',
};

const projectsContainerStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2rem',
  justifyContent: 'center',
};

const projectCardStyles = {
  backgroundColor: '#c8c8c8ff',
  border: '1px solid #e0e0e0',
  borderRadius: '12px',
  padding: '2rem',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  flexBasis: '320px',
  flexGrow: 1,
  maxWidth: '450px',
  display: 'flex',
  flexDirection: 'column',
};

const projectTitleStyles = {
  fontSize: '1.5rem',
  fontWeight: '600',
  marginBottom: '0.75rem',
  color: '#333',
};

const projectDescriptionStyles = {
  fontSize: '1rem',
  color: '#555',
  lineHeight: '1.6',
  marginBottom: '1.5rem',
  flexGrow: '1',
};

const projectTagsStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginBottom: '1.5rem',
};

const projectTagStyles = {
  backgroundColor: '#f0f4f8',
  color: '#0056b3',
  fontWeight: '500',
  padding: '0.35rem 0.85rem',
  borderRadius: '20px',
  fontSize: '0.8rem',
};

const projectLinksStyles = {
  marginTop: 'auto',
};

const projectLinkIconStyles = {
  fontSize: '1.75rem',
  color: '#333',
};



const Projects = () => {
  return (
    <section id="projects" style={sectionStyles}>
      <h2 style={sectionTitleStyles}>Projects</h2>
      <div className="projects__container" style={projectsContainerStyles}>
        {projects.map((project, index) => (
          <div className="project__card" key={index} style={projectCardStyles}>
            <h3 style={projectTitleStyles}>{project.title}</h3>
            <p style={projectDescriptionStyles}>{project.description}</p>
            <div className="project__tags" style={projectTagsStyles}>
              {project.tags.map((tag, tagIndex) => (
                <span className="project__tag" key={tagIndex} style={projectTagStyles}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="project__links" style={projectLinksStyles}>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project__link-icon"
              >
                <FaGithub style={projectLinkIconStyles} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;