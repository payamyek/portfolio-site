import { faGraduationCap, faMapPin, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../index.css'
import { getDateRange, getRelativeDate } from '../utils/dateUtils.js'
import './App.css'
import TypewriterEffect from './TypewriterEffect'

import { useEffect, useState } from 'react'
import { getBranchLatestCommitDate } from '../api/githubAPI'
import { experiences, links, projects } from '../data'
import ProjectDetails from './ProjectDetails'

let App = () => {
  const [lastUpdated, setLastUpdated] = useState('')
  const [typewriterAnimationFinished, setTypewriterAnimationFinished] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    getBranchLatestCommitDate().then((date) => setLastUpdated(date))
  }, [])

  useEffect(() => {
    if (localStorage.theme === undefined || localStorage.theme === 'dark') {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [])

  useEffect(() => {
    const meta = document.querySelector("meta[name='theme-color']");

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      meta.content = 'rgb(24 24 27)' // need for notch coloring on iPhones
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      meta.content = 'rgb(224 242 254)'
      localStorage.theme = 'light'
    }
  }, [theme])

  return (
    <div className="md:mt-10 mx-auto flex flex-col mt-5 xl:w-1/2 md:w-4/5 w-5/6 select-none">
      <div className="md:flex-row flex flex-col ">
        <PageHeading callback={setTypewriterAnimationFinished} finished={typewriterAnimationFinished} setTheme={setTheme} theme={theme} />
        <PersonalLinks />
      </div>
      <UserDetails />
      <AboutMe />
      <Experiences />
      <Projects />
      <Footer lastUpdated={lastUpdated} />
    </div>
  )
}

let PageHeading = (props) => {
  return (
    <div className="md:flex-1 md:basis-3/5 pb-0" >
      <h1 className="md:text-5xl md:min-h-[50px] text-2xl font-bold min-h-[40px] md:text-left text-center">
        <TypewriterEffect
          words={[
            'Greetings Visitor!',
            'Full-stack Developer',
            'Payam Yektamaram',
          ]}
          callback={props.callback}
        />
        {props.finished ? (
          props.theme === 'dark' ?
            <FontAwesomeIcon icon={faSun} className="hover:scale-105 hover:rotate-45 hover:transition hover:ease-in-out hover:delay-550 ml-5 cursor-pointer" onClick={() => props.setTheme('light')} /> :
            <FontAwesomeIcon icon={faMoon} className="hover:scale-105 hover:rotate-45 hover:transition hover:ease-in-out hover:delay-550 ml-5 cursor-pointer" onClick={() => props.setTheme('dark')} />) : null}
      </h1>
    </div>)
}

let UserDetails = () => (
  <div className="md:flex md:flex-row hidden gap-x-4 mt-1">
    <div className="flex flex-col">
      <span className="md:text-lg">
        <FontAwesomeIcon
          icon={faMapPin}
        />{' '}
        <span className='text-amber-800 dark:text-purple-400'>Toronto, Canada</span>
      </span>
    </div>
    <div className="flex flex-col">
      <span className="md:text-lg">
        <FontAwesomeIcon
          icon={faGraduationCap}
        />{' '}
        <span className='text-amber-800 dark:text-purple-400'>
          2022 UofT B.Sc (Hons)
        </span>
      </span>
    </div>
  </div>
)

let PersonalLinks = () => (
  <div className="md:flex-1 md:text-3xl md:mt-0 flex text-xl mt-3 font-bold text-center items-end">
    {links.map((link, i) => (
      <a
        className="flex-1 cursor-pointer"
        href={link.url}
        target="_blank"
        rel="noreferrer"
        aria-label={link.ariaLabel}
        key={i}>
        <FontAwesomeIcon
          icon={link.icon}
          className="hover:scale-105"
        />
      </a>
    ))}
  </div>
)

let AboutMe = () => (
  <div className="flex-col flex md:mt-6 mt-5">
    <div className="flex flex-row">
      <h1 className="md:text-3xl text-xl mb-3">About Me</h1>
    </div>
    <div className="flex flex-row">
      <p className="md:text-xl text-justify dark:text-white text-sm">
        I am a
        <span className="font-bold">&nbsp;full-stack developer&nbsp;</span>
        currently working at the
        <span className="font-bold">
          &nbsp;Municipal Property Assessment Corporation.&nbsp;
        </span>
        I have always been interested in technology and building new things.
        Which is why I am currently learning
        <span className="font-bold">&nbsp;Rust&nbsp;</span>in hopes of using it
        to power a new
        <span className="font-bold">&nbsp;chess engine&nbsp;</span>I am
        currently building!
      </p>
    </div>
  </div>
)

let Experiences = () => (
  <div className="flex-col flex md:mt-6 mt-5">
    <div className="flex flex-row">
      <h1 className="md:text-3xl text-xl mb-3">Experience</h1>
    </div>
    <div className="flex flex-row">
      <ul className="dark:text-white text-amber-800 md:text-xl text-sm flex-1">
        {experiences.map((data, i) => (
          <li
            className="flex"
            key={i}>
            <span className="font-bold flex-1">
              {data.position} @ {data.company}
            </span>
            <span className="md:hidden ">
              {data.startDate.getFullYear()}
            </span>
            <span className="md:inline hidden dark:text-purple-400 text-teal-800">
              {getDateRange(data.startDate, data.endDate)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

let Projects = () => (
  <div className="flex-col flex md:mt-6 mt-5">
    <div className="flex flex-row">
      <h1 className="md:text-3xl text-xl">My Projects</h1>
    </div>
    {projects.map((project, i) => (
      <ProjectDetails
        {...project}
        key={i}
      />
    ))}
  </div>
)

let Footer = (props) => (
  <footer className="flex flex-col md:flex-row my-4">
    <div className="flex-1">
      <small>Last updated {getRelativeDate(new Date(props.lastUpdated))}</small>
    </div>
    <div>
      <small>&copy; Copyright 2023, Payam Yektamaram</small>
    </div>
  </footer>
)

export default App
