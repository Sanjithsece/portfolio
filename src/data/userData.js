// src/data/userData.js

import aboutImage from '../assets/about-image.png';
import resumeFile from '../assets/resume.pdf';

export const userData = {
  name: "Sanjith S",
  title: "Software Developer",
  tagline: "Building efficient and user-friendly web applications.",

  about: {
    image: aboutImage,
    bio: "I'm Sanjith S, a passionate full-stack developer skilled in Java, React, Node.js, and Spring Boot. I enjoy developing scalable web applications and REST APIs, integrating front-end and back-end technologies. I love problem-solving and constantly improving my skills through coding challenges and real-world projects.",
  },

  socials: {
    github: "https://github.com/Sanjithsece",
    linkedin: "https://www.linkedin.com/in/sanjith-s-668336283/",
    twitter: "", // optional
  },

  contact: {
    email: "sanjithsece@gmail.com",
    phone: "+91 9894755053",
  },

  resume: resumeFile,

 

  education: [
    {
      degree: "B.E. Computer and Communication Engineering",
      institution: "Sri Eshwar College of Engineering",
      years: "2023 – 2027",
      cgpa: "7.8 (upto 4th sem)",
    },
    {
      degree: "HSC",
      institution: "Vighneshwar Vidhya Mandhir",
      years: "2022 – 2023",
      percentage: "72%",
    },
    {
      degree: "SSLC",
      institution: "Vighneshwar Vidhya Mandhir",
      years: "2020 – 2021",
    },
  ],

  skills: [
    "JavaScript", "React.js", "Node.js", "Express.js", "Spring Boot", "Java",
    "MongoDB", "MySQL", "HTML", "CSS", "C++", "Python", "Git", "Postman",
  ],

  projects: [
    {
      title: "Blood Donation Platform",
      description: "Geo-aware blood donation platform with donor and hospital flows, emergency request handling, and responsive full-stack web interfaces.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      githubLink: "https://github.com/Sanjithsece/blood-donation-",
    },
    {
      title: "MoneyProject",
      description: "Finance-focused project repository for budgeting and money management workflows. The public repository currently exists but is still empty.",
      tags: ["Finance", "Planning", "Web App"],
      githubLink: "https://github.com/Sanjithsece/MoneyProject-",
    },
    {
      title: "Power BI Dashboard",
      description: "Data visualization project built in Power BI for interactive reporting and analytics workflows using `.pbix` assets.",
      tags: ["Power BI", "Data Analytics", "Dashboarding"],
      githubLink: "https://github.com/Sanjithsece/powerbi",
    },
    {
      title: "Smart Signal Control",
      description: "Traffic signal optimization project focused on smarter control logic for improving road flow and emergency responsiveness.",
      tags: ["IoT", "Automation", "Traffic Systems"],
      githubLink: "https://github.com/Sanjithsece",
    },
    {
      title: "Smart Fridge",
      description: "Frontend project for a smart-fridge experience built with React and Vite to manage food-related interactions in a responsive UI.",
      tags: ["React.js", "Vite", "Frontend"],
      githubLink: "https://github.com/Sanjithsece/Smart-fridge",
    },
    {
      title: "Tic Tac Toe",
      description: "Interactive tic-tac-toe web app with a separate frontend repository and a simple game-focused user experience.",
      tags: ["React.js", "Vite", "Game UI"],
      githubLink: "https://github.com/Sanjithsece/tic-tac-toe-frontend",
    },
    {
      title: "Virtual Try-On",
      description: "Virtual clothing try-on interface project. I mapped this to the closest public repository available under your GitHub profile.",
      tags: ["React.js", "Fashion Tech", "Frontend"],
      githubLink: "https://github.com/Sanjithsece/shirtfrontend-",
    },
  ],
};
  
