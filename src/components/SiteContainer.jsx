import { useEffect, useState } from 'react'
import PageHeading from '../components/PageHeading'
import PersonalLinks from '../components/PersonalLinks'
import NavBar from '../components/NavBar'
import classnames from 'classnames'
import MobileNavBar from '../components/MobileNavBar'

import Footer from './Footer'
import { getBranchLatestCommitDate } from '../api/githubAPI'
import UserDetails from './UserDetails'

let Home = (props) => {
  const [lastUpdated, setLastUpdated] = useState('')
  const [theme, setTheme] = useState('dark')
  const [loading, setLoading] = useState(true) // prevent FOUC

  useEffect(() => {
    getBranchLatestCommitDate().then((date) => setLastUpdated(date))
  }, [])

  useEffect(() => {
    setLoading(false)
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
    <div className={classnames({ flex: !loading, hidden: loading })}>
      <NavBar
        theme={theme}
        setTheme={setTheme}
      />
      <div className="lg:mt-10 mx-auto flex flex-col mt-5 xl:w-1/2 lg:w-4/5 w-5/6 select-none">
        <div className="lg:flex-row flex flex-col">
          <PageHeading />
          <MobileNavBar
            setTheme={setTheme}
            theme={theme}
          />
          <PersonalLinks />
        </div>
        <UserDetails />
        {props.children}
        <Footer lastUpdated={lastUpdated} />
      </div>
      <div className="basis-1/4 hidden lg:flex"></div>
    </div>
  )
}

export default Home