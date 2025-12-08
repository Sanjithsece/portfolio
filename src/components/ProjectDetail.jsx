import React, { useState } from 'react'; 
import { useParams, Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';


const projects = [
  {
    title: "MoneyBridge",
    description: "Full-stack web app for peer-to-peer exchange of UPI and physical cash. Features secure JWT authentication, request handling, and notifications.",
    tags: ["Spring Boot", "React.js", "JWT", "REST APIs"],
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


const styles = {
  container: {
    width: '100%',
    padding: '1rem',
    boxSizing: 'border-box',
    animation: 'fadeIn 0.5s ease-in-out',
  },
  backButtonBase: {
    fontSize: '1em',
    fontWeight: '500',
    color: '#646cff',
    backgroundColor: 'transparent',
    border: '1px solid #646cff',
    padding: '0.5em 1em',
    marginBottom: '2rem',
    cursor: 'pointer',
    transition: 'background-color 0.25s, color 0.25s',
    textDecoration: 'none',
    display: 'inline-block',
  },
  backButtonHover: {
    backgroundColor: '#646cff',
    color: '#ffffff',
  },
  title: {
    fontSize: '3em',
    color: '#646cff',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.2em',
    lineHeight: '1.7',
    maxWidth: '800px',
    marginBottom: '2rem',
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '1rem',
  },
  tag: {
    borderRadius: '20px',
    padding: '0.25em 0.75em',
    fontSize: '0.9em',
    backgroundColor: '#333',
    color: '#eee',
  },
  githubLinkBase: {
    display: 'inline-block',
    fontSize: '1.1em',
    backgroundColor: '#646cff',
    color: '#ffffff',
    padding: '0.75em 1.5em',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '500',
    marginTop: '2rem',
    transition: 'background-color 0.25s',
  },
  githubLinkHover: {
    backgroundColor: '#535bf2',
    color: '#ffffff',
  },
};


const ProjectDetail = () => {
  const { projectTitle } = useParams();
  
  const [isBackHovered, setIsBackHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);

  const project = projects.find(
    (p) => p.title === decodeURIComponent(projectTitle)
  );


  const backButtonStyle = {
    ...styles.backButtonBase,
    ...(isBackHovered ? styles.backButtonHover : {}),
  };

  const githubLinkStyle = {
    ...styles.githubLinkBase,
    ...(isGithubHovered ? styles.githubLinkHover : {}),
  };

  if (!project) {
    return (
      <section style={styles.container}>
        <h1 style={styles.title}>Project Not Found</h1>
        <Link 
          to="/" 
          style={backButtonStyle}
          onMouseEnter={() => setIsBackHovered(true)}
          onMouseLeave={() => setIsBackHovered(false)}
        >
          &larr; Back to all projects
        </Link>
      </section>
    );
  }

  return (
    <section id="project-detail" style={styles.container}>
      <Link 
        to="/" 
        style={backButtonStyle}
        onMouseEnter={() => setIsBackHovered(true)}
        onMouseLeave={() => setIsBackHovered(false)}
      >
        &larr; Back to all projects
      </Link>
      
      <h1 style={styles.title}>{project.title}</h1>
      
      <div className="project-detail-content">
        <p style={styles.description}>
          {project.description}
        </p>
        
        <div style={styles.tagsContainer}>
          {project.tags.map((tag, tagIndex) => (
            <span style={styles.tag} key={tagIndex}>
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={githubLinkStyle}
          onMouseEnter={() => setIsGithubHovered(true)}
          onMouseLeave={() => setIsGithubHovered(false)}
        >
          <FaGithub /> View on GitHub
        </a>
      </div>
      
    </section>
  );
};

export default ProjectDetail;

