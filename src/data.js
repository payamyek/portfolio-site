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
    tech: "[Vue3, NodeJS, MongoDb, RestAPI]",
    description: "Comprehensive flight ticket booking system built using Vue3 utilizing asynchronous task queues with workers to process application webhooks and emails.",
    link:"https://github.com/UTSCC09/project-frontend-frauds",
    year: "2022"
  },
  {
    name: "Pawsup",
    tech: "[React Native, NodeJs, MongoDb, RestAPI]",
    description: "Mobile application that enabled clients to purchase pet services built with React Native through Expo to deliver mobile app for both Android and iOS environments.",
    year: "2021"
  },
  {
    name: "Jeopardy",
    tech: "[React, JavaScript, Redux, CSS]",
    description: "Game of Jeopardy that allowed two teams to play a full fledged game with live score tracking that was built using React and Redux for state management.",
    link:"https://github.com/payamyek/Jeopardy",
    year: "2020"
  },
  {
    name: "Supreme Car Rentals",
    tech: "[Java, SwingUI, SQL]",
    description: "Car rental application built using Java Swing powered by an embedded SQLite database which allowed clients to rent cars and receive an auto-generated printable PDF invoice with booking details.",
    link:"https://github.com/payamyek/SupremeCarRentals",
    year: "2019"
  }
]