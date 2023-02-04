import '../index.css'
import './App.css'

import { useEffect, useState } from 'react'
import { getBranchLatestCommitDate } from '../api/githubAPI'
import AboutMe from './AboutMe'
import Experiences from './Experiences'
import Footer from './Footer'
import PageHeading from './PageHeading'
import PersonalLinks from './PersonalLinks'
import Projects from './Projects'
import UserDetails from './UserDetails'
import SideBar from './SideBar'

let App = () => {
  const [lastUpdated, setLastUpdated] = useState('')
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    getBranchLatestCommitDate().then((date) => setLastUpdated(date))
  }, [])

  useEffect(() => {
    if (localStorage.theme === undefined || localStorage.theme === 'dark') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    const meta = document.querySelector("meta[name='theme-color']")

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
    <div className="flex">
      <SideBar
        theme={theme}
        setTheme={setTheme}
      />
      <div className="md:mt-10 mx-auto flex flex-col mt-5 xl:w-1/2 md:w-4/5 w-5/6 select-none">
        <div className="md:flex-row flex flex-col ">
          <PageHeading
            setTheme={setTheme}
            theme={theme}
          />
          <PersonalLinks />
        </div>
        <UserDetails />
        <AboutMe />
        <Experiences />
        <Projects />
        <Footer lastUpdated={lastUpdated} />
      </div>
      <div className="basis-1/4"></div>
    </div>
  )
}

export default App
