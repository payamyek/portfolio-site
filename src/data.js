import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const links = [
  {
    url: 'https://cdn.jsdelivr.net/gh/payamyek/career@889c1519500f6b3c6581a35a74737319f6aa11ca/resume/resume.pdf',
    icon: faFilePdf,
    ariaLabel: "Download my resume."
  },
  {
    url: 'https://github.com/payamyek',
    icon: faGithub,
    ariaLabel: "View my GitHub Portfolio."
  },
  {
    url: 'https://linkedin.com/in/payamyek',
    icon: faLinkedin,
    ariaLabel: "View my LinkedIn profile."
  },
  {
    url: 'mailto:payamyek@gmail.com',
    icon: faEnvelope,
    ariaLabel: "Send me an email."
  },
]


export const projects = [
  {
    name: "Air Toronto",
    tech: "[Vue3, Node.js, MongoDB, RestAPI]",
    description: "Comprehensive flight booking system built with Vue3 using asynchronous task queues with workers to process application webhooks and emails.",
    link:"https://github.com/UTSCC09/project-frontend-frauds",
  },
  {
    name: "Pawsup",
    tech: "[React Native, Node.js, MongoDB, RestAPI]",
    description: "Mobile application that enabled clients to purchase pet services built with React Native through Expo to deliver iOS and Android mobile apps.",
  },
  {
    name: "Jeopardy",
    tech: "[React, JavaScript, Redux, CSS]",
    description: "Game of Jeopardy that allowed two teams to play Jeopardy with live score tracking that was built using React and Redux for state management.",
    link:"https://github.com/payamyek/Jeopardy",
  },
  {
    name: "Portfolio Site",
    tech: "[React.js, Tailwind CSS]",
    description: "Personal portfolio site made using React.js and Tailwind CSS.",
    link:"https://github.com/payamyek/portfolio-site"
  },
  {
    name: "Supreme Car Rentals",
    tech: "[Java, Swing, SQL]",
    description: "Car rental application built using Java Swing powered by an embedded SQLite database which allowed clients to rent cars and receive an auto-generated printable PDF invoice with booking details.",
    link:"https://github.com/payamyek/SupremeCarRentals",
  }
]
