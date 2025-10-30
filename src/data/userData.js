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
};
  