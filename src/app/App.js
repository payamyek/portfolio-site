import './App.css';
import '../index.css'
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import ProjectDetails from '../projectDetails/ProjectDetails';
import {links, projects} from '../data';

let App = () => {
  return (
    <div className="lg:max-w-4xl md:mt-10 md:max-w-2xl mx-auto flex flex-col mt-5 max-w-xs select-none">
      <div className="md:flex-row flex flex-col ">
        <PageHeading />
        <PersonalLinks />
      </div>
      <UserDetails />
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

let PageHeading = () => (
  <div className="md:flex-1 md:basis-3/5 pb-0">
    <h1 className="md:text-5xl md:min-h-[50px] text-2xl font-bold min-h-[40px] md:text-left text-center">
      <Typewriter
        words={['Greetings Visitor!', "Full-stack Developer", 'Payam Yektamaram']}
      />
    </h1>
  </div>
)

let UserDetails = () => (
  <div className="md:flex md:flex-row hidden gap-x-4 md:mt-3 mt-1">
    <div className="flex flex-col text-purple-400">
      <span className="md:text-lg"><FontAwesomeIcon color="lawngreen" icon={faMapPin}/> Toronto, Canada</span>
    </div>
    <div className="flex flex-col text-purple-400">
      <span className="md:text-lg"><FontAwesomeIcon color="lawngreen" icon={faGraduationCap}/> UofT 2022 B.Sc (Hons)</span>
    </div>
  </div>
)

let PersonalLinks = () => (
  <div className="md:flex-1 md:text-3xl md:mt-0 flex text-xl mt-3 font-bold text-center items-end" >
    {
      links.map((link, i) =>
        <a className="flex-1 cursor-pointer" href={link.url} target="_blank" rel="noreferrer" aria-label={link.ariaLabel} key={i} >
          <FontAwesomeIcon icon={link.icon} className="hover:scale-105"/>
        </a>
      )
    }
  </div>
)

let AboutMe = () => (
  <div className="flex-col flex md:mt-9 mt-5">
    <div className="flex flex-row">
      <h1 className="md:text-3xl text-xl mb-3">
        About Me
      </h1>
    </div>
    <div className="flex flex-row">
      <p className="md:text-xl text-justify text-white text-sm">
        I'm a<span className="font-bold">&nbsp;full-stack developer&nbsp;</span>
        currently working at the<span className="font-bold">&nbsp;Municipal Property Assessment Corporation.&nbsp;</span>
        I have always been interested in technology and building new things
        which is why I'm currently learning<span className="font-bold">&nbsp;Rust&nbsp;</span>in hopes
        of better canvassing the imperative programming scene!
      </p>
    </div>
  </div>
);

let Experience = () => (
  <div className="flex-col flex md:mt-9 mt-5">
    <div className="flex flex-row">
    <h1 className="md:text-3xl text-xl mb-3">
      Experience
    </h1>
    </div>
    <div className="flex flex-row">
      <ul className="text-white md:text-xl text-sm flex-1">
        <li className="flex">
          <span className="font-bold flex-1">Systems Developer @ MPAC</span>
          <span className="md:hidden">2022</span>
          <span className="md:inline hidden"> 4 Mos (Sep 2022 - Current)</span>
        </li>
        <li className="flex">
          <span className="font-bold flex-1">Junior Systems Developer @ MPAC</span>
          <span className="md:hidden">2020</span>
          <span className="md:inline hidden">12 Mos (Jan 2020 - Dec 2020)</span>
        </li>
      </ul>
    </div>
  </div>
)

let Projects = () => (
  <div className="flex-col flex md:mt-9 mt-5">
    <div className="flex flex-row">
        <h1 className="md:text-3xl text-xl">
          My Projects
        </h1>
    </div>
    {projects.map((project, i) => <ProjectDetails {...project} key={i} />)}
  </div>
)

let Footer = () => (
  <div className="flex flex-row my-4">
   <footer>
      <small>&copy; Copyright 2022, Payam Yektamaram</small>
   </footer>
  </div>
)

export default App;