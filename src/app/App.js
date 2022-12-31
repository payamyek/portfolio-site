import './App.css'
import '../index.css'
import TypewriterEffect from '../typewriterEffect/TypewriterEffect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { getDateRange, getGHReadableDate } from '../utils/dateUtils.js'

import ProjectDetails from '../projectDetails/ProjectDetails'
import { experiences, links, projects, githubAPI } from '../data'
import { useEffect, useState } from 'react'

let App = () => {
  const [lastUpdated, setLastUpdated] = useState('')

  useEffect(() => {
    fetch(githubAPI.stats)
      .then((data) => data.json())
      .then((data) => setLastUpdated(data.commit.commit.author.date))
  })

  return (
    <div
      className="lg:max-w-4xl md:mt-10 md:max-w-2xl mx-auto flex flex-col mt-5 max-w-sm select-none">
      <div className="md:flex-row flex flex-col ">
        <PageHeading/>
        <PersonalLinks/>
      </div>
      <UserDetails/>
      <AboutMe/>
      <Experience/>
      <Projects/>
      <Footer lastUpdated={lastUpdated}/>
    </div>
  )
}

let PageHeading = () => (
  <div className="md:flex-1 md:basis-3/5 pb-0">
    <h1
      className="md:text-5xl md:min-h-[50px] text-2xl font-bold min-h-[40px] md:text-left text-center">
      <TypewriterEffect
        words={[
          'Greetings Visitor!',
          'Full-stack Developer',
          'Payam Yektamaram']}
      />
    </h1>
  </div>
)

let UserDetails = () => (
  <div className="md:flex md:flex-row hidden gap-x-4 mt-1">
    <div className="flex flex-col text-purple-400">
      <span className="md:text-lg"><FontAwesomeIcon color="lawngreen"
                                                    icon={faMapPin}/> Toronto, Canada</span>
    </div>
    <div className="flex flex-col text-purple-400">
      <span className="md:text-lg"><FontAwesomeIcon color="lawngreen"
                                                    icon={faGraduationCap}/> 2022 UofT B.Sc (Hons)</span>
    </div>
  </div>
)

let PersonalLinks = () => (
  <div
    className="md:flex-1 md:text-3xl md:mt-0 flex text-xl mt-3 font-bold text-center items-end">
    {
      links.map((link, i) =>
        <a className="flex-1 cursor-pointer" href={link.url} target="_blank"
           rel="noreferrer" aria-label={link.ariaLabel} key={i}>
          <FontAwesomeIcon icon={link.icon} className="hover:scale-105"/>
        </a>,
      )
    }
  </div>
)

let AboutMe = () => (
  <div className="flex-col flex md:mt-6 mt-5">
    <div className="flex flex-row">
      <h1 className="md:text-3xl text-xl mb-3">
        About Me
      </h1>
    </div>
    <div className="flex flex-row">
      <p className="md:text-xl text-justify text-white text-sm">
        I am a<span
        className="font-bold">&nbsp;full-stack developer&nbsp;</span>
        currently working at the<span className="font-bold">&nbsp;Municipal Property Assessment Corporation.&nbsp;</span>
        I have always been interested in technology and building new things.
        Which is why I am currently learning<span
        className="font-bold">&nbsp;Rust&nbsp;</span>in hopes
        of using it to power a new<span
        className="font-bold">&nbsp;chess engine&nbsp;</span>
        I am currently building!
      </p>
    </div>
  </div>
)

let Experience = () => (
  <div className="flex-col flex md:mt-6 mt-5">
    <div className="flex flex-row">
      <h1 className="md:text-3xl text-xl mb-3">
        Experience
      </h1>
    </div>
    <div className="flex flex-row">
      <ul className="text-white md:text-xl text-sm flex-1">
        {
          experiences.map((data, i) => (
            <li className="flex" key={i}>
              <span className="font-bold flex-1">
                {data.position} @ {data.company}
              </span>
              <span className="md:hidden text-purple-400">
                {data.startDate.getFullYear()}
              </span>
              <span className="md:inline hidden text-purple-400">
                {getDateRange(data.startDate, data.endDate)}
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  </div>
)

let Projects = () => (
  <div className="flex-col flex md:mt-6 mt-5">
    <div className="flex flex-row">
      <h1 className="md:text-3xl text-xl">
        My Projects
      </h1>
    </div>
    {projects.map((project, i) => <ProjectDetails {...project} key={i}/>)}
  </div>
)

let Footer = (props) => (
  <footer className="flex flex-col md:flex-row my-4">
    <div className="flex-1">
      <small>
        Last updated {getGHReadableDate(props.lastUpdated)}
      </small>
    </div>
    <div>
      <small>&copy; Copyright 2022, Payam Yektamaram</small>
    </div>
  </footer>
)

export default App
