import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const links = [
  {
    url: 'https://github.com/payamyek/career/blob/e1005da8687851e02b6f54cd6404e39a45fbc898/resume/resume.pdf?raw=true',
    icon: faFileDownload,
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
    tech: "[Vue3, Node.js, MongoDb, RestAPI]",
    description: "Comprehensive flight booking system built with Vue3 using asynchronous task queues with workers to process application webhooks and emails.",
    link:"https://github.com/UTSCC09/project-frontend-frauds",
  },
  {
    name: "Pawsup",
    tech: "[React Native, Node.js, MongoDb, RestAPI]",
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
    tech: "[React.js, TailWindCSS]",
    description: "Personal portfolio site made using React.js and TailWindCSS.",
    link:"https://github.com/payamyek/portfolio-site"
  },
  {
    name: "Supreme Car Rentals",
    tech: "[Java, Swing, SQL]",
    description: "Car rental application built using Java Swing powered by an embedded SQLite database which allowed clients to rent cars and receive an auto-generated printable PDF invoice with booking details.",
    link:"https://github.com/payamyek/SupremeCarRentals",
  }
]
