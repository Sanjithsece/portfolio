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

  projects: [
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
  ],

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
  